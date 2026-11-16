'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),{promisify}=require('node:util');
const {Store}=require('./store.cjs'),{Realm,GameError,must,DB}=require('./world.cjs'),{root}=require('./engine.cjs');
const scrypt=promisify(crypto.scrypt),O=DB.online,C=DB.config;
const digest=value=>crypto.createHash('sha256').update(value).digest('hex');
function createService(options={}){
 const store=options.store||new Store(options.filename||path.join(process.env.DATA_DIR||path.join(root,'data'),'everdawn.sqlite'));
 const realm=new Realm(store,options),rates=new Map();let ticks,frames,snapshots,saves;
 function json(res,status,value){res.writeHead(status,{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'});res.end(JSON.stringify(value));}
 function rate(key,max,windowMs){const now=realm.now(),old=rates.get(key);const bucket=old&&now-old.at<windowMs?old:{at:now,count:0};bucket.count++;rates.set(key,bucket);must(bucket.count<=max,'onlineBusy');}
 function ip(req){return req.socket.remoteAddress||'local';}
 function token(req){const match=(req.headers.cookie||'').split(';').map(v=>v.trim()).find(v=>v.startsWith(O.cookie+'='));return match?match.slice(O.cookie.length+1):'';}
 function character(req){const id=store.session(digest(token(req)),realm.now());must(id,'onlineLoginRequired');return realm.character(id);}
 function origin(req){const host=req.headers.host,forwarded=process.env.TRUST_PROXY==='1'&&req.headers['x-forwarded-proto'];return (forwarded==='https'||req.socket.encrypted?'https':'http')+'://'+host;}
 function sameOrigin(req){must(req.headers['x-game-request']==='1'&&(!req.headers.origin||req.headers.origin===origin(req)),'onlineSameOrigin');}
 async function body(req){let size=0,buffers=[];for await(const chunk of req){size+=chunk.length;must(size<=O.maxBodyBytes);buffers.push(chunk);}try{return JSON.parse(Buffer.concat(buffers).toString('utf8')||'{}');}catch{throw new GameError('onlineInvalid');}}
 async function issueSession(res,account,req){const raw=crypto.randomBytes(O.sessionBytes).toString('hex');realm.disconnectStream(account,'replaced');store.deleteAccountSessions(account);store.addSession(digest(raw),account,realm.now()+O.sessionDays*O.dayMs);const secure=origin(req).startsWith('https:');res.setHeader('set-cookie',`${O.cookie}=${raw}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${Math.floor(O.sessionDays*O.dayMs/C.milliseconds)}${secure?'; Secure':''}`);}
 const server=http.createServer(async(req,res)=>{
  try{
   const url=new URL(req.url,origin(req));
   if(req.method==='GET'&&url.pathname==='/api/v1/health')return json(res,200,{ok:true,protocol:O.protocol,version:DB.meta.version,players:realm.active().length,maxPlayers:O.maxPlayers,allowLegacy:process.env.ALLOW_LEGACY_IMPORT==='1'});
   if(req.method==='POST')sameOrigin(req);
   if(req.method==='POST'&&['/api/v1/auth/register','/api/v1/auth/login'].includes(url.pathname)){
    rate('auth:'+ip(req),O.authRate,O.authWindow*C.milliseconds);const value=await body(req);must(typeof value.username==='string'&&new RegExp(O.usernamePattern).test(value.username)&&typeof value.password==='string'&&value.password.length>=O.passwordMin&&value.password.length<=O.passwordMax);const username=value.username.toLowerCase();let account=store.account(username);
    if(url.pathname.endsWith('/register')){must(!account,'onlineAccountExists');must(!value.legacy||process.env.ALLOW_LEGACY_IMPORT==='1','saveTransferInvalid');must(typeof value.name==='string'&&value.name.trim().length>0&&value.name.length<=O.maxName);const salt=crypto.randomBytes(O.saltBytes).toString('hex'),password=await scrypt(value.password,salt,O.passwordBytes,{N:O.scryptN,r:O.scryptR,p:O.scryptP,maxmem:O.scryptMaxmem}),id=realm.id();account={id,username,salt,password:password.toString('hex'),created:realm.now()};store.transaction(()=>{store.addAccount(account);const c=realm.createCharacter(id,value.raceId,value.classId,value.name,value.legacy||null);realm.persistCharacter(c);});}
    else{const salt=account?.salt||crypto.randomBytes(O.saltBytes).toString('hex'),actual=await scrypt(value.password,salt,O.passwordBytes,{N:O.scryptN,r:O.scryptR,p:O.scryptP,maxmem:O.scryptMaxmem}),expected=account?Buffer.from(account.password,'hex'):Buffer.alloc(O.passwordBytes);must(account&&expected.length===actual.length&&crypto.timingSafeEqual(expected,actual),'onlineBadAuth');}
    await issueSession(res,account.id,req);return json(res,200,{ok:true,name:realm.character(account.id).G.state().name});
   }
   if(req.method==='POST'&&url.pathname==='/api/v1/auth/logout'){const c=character(req);realm.disconnect(c);store.deleteSession(digest(token(req)));res.setHeader('set-cookie',O.cookie+'=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');return json(res,200,{ok:true});}
   if(req.method==='GET'&&url.pathname==='/api/v1/save'){const c=character(req);return json(res,200,{ok:true,save:c.G.snapshot({currentMapOnly:true})});}
   if(req.method==='GET'&&url.pathname==='/api/v1/session'){const c=character(req);return json(res,200,{ok:true,state:realm.state(c)});}
   if(req.method==='GET'&&url.pathname==='/api/v1/events'){
    const c=character(req);must(Number(url.searchParams.get('protocol'))===O.protocol,'onlineIncompatible');res.writeHead(200,{'content-type':'text/event-stream','cache-control':'no-cache, no-transform','connection':'keep-alive','x-accel-buffering':'no'});res.write(': everdawn\n\n');const write=(packet,reason)=>{if(packet===null){res.end();return;}if(res.writableLength>O.streamBackpressure){res.destroy();return;}res.write('event: '+packet.event+'\ndata: '+JSON.stringify(packet.data)+'\n\n');};realm.connect(c,write);res.on('close',()=>{if(realm.streams.get(c.id)===write){realm.streams.delete(c.id);c.lastSeen=realm.now();realm.resetMovement(c);}});return;
   }
   if(req.method==='POST'&&url.pathname==='/api/v1/input'){const c=character(req);rate('input:'+c.id,O.inputRate,O.rateWindow*C.milliseconds);const value=await body(req);must(value.connectionId===c.connectionId,'onlineStaleAction');realm.input(c,value.x,value.y,value);return json(res,200,{ok:true});}
   if(req.method==='POST'&&url.pathname==='/api/v1/action'){const c=character(req);rate('action:'+c.id,O.actionRate,O.rateWindow*C.milliseconds);const value=await body(req);must(value.context?.connectionId===c.connectionId,'onlineStaleAction');const result=realm.command(c,value.method,value.args||[],value.input||null,value.context||null);return json(res,200,{...result,state:realm.state(c)});}
   if(req.method==='GET'&&url.pathname==='/api/v1/social'){const c=character(req);return json(res,200,{ok:true,view:realm.socialView(c)});}
   if(url.pathname.startsWith('/api/'))return json(res,404,{ok:false,message:DB.ui.onlineInvalid});
   if(req.method==='GET'&&['/','/index.html','/game-db.js'].includes(url.pathname)){const filename=path.join(root,url.pathname==='/game-db.js'?'game-db.js':'index.html');res.writeHead(200,{'content-type':url.pathname.endsWith('.js')?'text/javascript; charset=utf-8':'text/html; charset=utf-8','cache-control':'no-cache','x-content-type-options':'nosniff','referrer-policy':'same-origin','content-security-policy':"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob:; connect-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'none'"});return fs.createReadStream(filename).pipe(res);}
   json(res,404,{ok:false});
  }catch(error){if(!res.headersSent)json(res,error.key==='onlineLoginRequired'?401:400,{ok:false,message:error instanceof GameError?error.message:DB.ui.onlineError});else res.end();if(!(error instanceof GameError))options.onError?.(error);}
 });
 function startTimers(){ticks=setInterval(()=>{try{realm.pulse();}catch(error){options.onError?.(error);}},O.tickMs);frames=setInterval(()=>realm.broadcast(false),O.frameMs);snapshots=setInterval(()=>realm.broadcast(true),O.snapshotMs);saves=setInterval(()=>{try{realm.persist();const now=realm.now();for(const [key,value]of rates)if(now-value.at>O.authWindow*C.milliseconds)rates.delete(key);}catch(error){options.onError?.(error);}},O.persistMs);}
 async function close(){for(const timer of [ticks,frames,snapshots,saves])clearInterval(timer);realm.close();await new Promise(resolve=>server.close(resolve));store.close();}
 return {server,realm,store,startTimers,close};
}
if(require.main===module){process.umask(0o077);const service=createService({onError:error=>console.error(error.name+': '+error.message)}),port=Number(process.env.PORT||O.port),host=process.env.HOST||'0.0.0.0';service.server.listen(port,host,()=>{service.startTimers();console.log(DB.meta.title+' online: http://localhost:'+port);});for(const signal of ['SIGINT','SIGTERM'])process.once(signal,()=>service.close().then(()=>process.exit(0)));}
module.exports={createService};
