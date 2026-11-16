import {DurableObject} from 'cloudflare:workers';
import runtime from './generated/runtime.cjs';
import world from './generated/world.cjs';
import {CloudStore} from './store.mjs';
const {DB}=runtime,{Realm,GameError,must}=world,O=DB.online,C=DB.config;
const encoder=new TextEncoder(),hex=bytes=>Array.from(new Uint8Array(bytes),v=>v.toString(16).padStart(2,'0')).join('');
const randomHex=n=>hex(crypto.getRandomValues(new Uint8Array(n)));
async function digest(value){return hex(await crypto.subtle.digest('SHA-256',encoder.encode(value)));}
async function passwordHash(password,salt){const key=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:encoder.encode(salt),iterations:O.pbkdf2Iterations},key,O.passwordBytes*C.byteBits));}
function equal(a,b){if(a.length!==b.length)return false;let diff=0;for(let i=0;i<a.length;i++)diff|=a.charCodeAt(i)^b.charCodeAt(i);return diff===0;}
function json(value,status=200,headers={}){return Response.json(value,{status,headers:{'cache-control':'no-store','x-content-type-options':'nosniff',...headers}});}

export class EverdawnWorld extends DurableObject {
 constructor(ctx,env){super(ctx,env);this.env=env;this.store=new CloudStore(ctx.storage);this.realm=new Realm(this.store);this.rates=new Map();this.timers=[];}
 rate(key,max,span){const now=Date.now(),old=this.rates.get(key),value=old&&now-old.at<span?old:{at:now,count:0};value.count++;this.rates.set(key,value);must(value.count<=max,'onlineBusy');}
 token(request){return (request.headers.get('cookie')||'').split(';').map(s=>s.trim()).find(s=>s.startsWith(O.cookie+'='))?.slice(O.cookie.length+1)||'';}
 async character(request){const id=this.store.session(await digest(this.token(request)),Date.now());must(id,'onlineLoginRequired');return this.realm.character(id);}
 async body(request){const length=Number(request.headers.get('content-length')||0);must(length<=O.maxBodyBytes);const value=await request.text();must(encoder.encode(value).byteLength<=O.maxBodyBytes);try{return JSON.parse(value||'{}');}catch{throw new GameError('onlineInvalid');}}
 sameOrigin(request){must(request.headers.get('x-game-request')==='1'&&(!request.headers.get('origin')||request.headers.get('origin')===new URL(request.url).origin),'onlineSameOrigin');}
 start(){if(this.timers.length)return;this.timers=[setInterval(()=>this.realm.tick(),O.tickMs),setInterval(()=>this.realm.broadcast(false),O.frameMs),setInterval(()=>this.realm.broadcast(true),O.snapshotMs),setInterval(()=>{this.realm.persist();const now=Date.now();for(const [key,value]of this.rates)if(now-value.at>O.authWindow*C.milliseconds)this.rates.delete(key);if(!this.realm.active().length){for(const timer of this.timers)clearInterval(timer);this.timers=[];}},O.persistMs)];}
 async fetch(request){
  try{
   const url=new URL(request.url),route=url.pathname.replace('/api/v1/','');
   if(route==='health')return json({ok:true,protocol:O.protocol,version:DB.meta.version,transport:'websocket',players:this.realm.active().length,maxPlayers:O.maxPlayers,allowLegacy:this.env.ALLOW_LEGACY_IMPORT==='1',backend:'durable-object-sqlite'});
   if(request.method==='POST')this.sameOrigin(request);
   if(request.method==='POST'&&['auth/register','auth/login'].includes(route)){
    this.rate('auth:'+(request.headers.get('cf-connecting-ip')||'local'),O.authRate,O.authWindow*C.milliseconds);const value=await this.body(request);must(typeof value.username==='string'&&new RegExp(O.usernamePattern).test(value.username)&&typeof value.password==='string'&&value.password.length>=O.passwordMin&&value.password.length<=O.passwordMax);const username=value.username.toLowerCase();let account=this.store.account(username);
    if(route==='auth/register'){
     must(!account,'onlineAccountExists');must(!value.legacy||this.env.ALLOW_LEGACY_IMPORT==='1','saveTransferInvalid');must(typeof value.name==='string'&&value.name.trim().length>0&&value.name.length<=O.maxName);const salt=randomHex(O.saltBytes),password=await passwordHash(value.password,salt),id=crypto.randomUUID();must(!this.store.account(username),'onlineAccountExists');account={id,username,salt,password:'pbkdf2:'+password,created:Date.now()};this.store.transaction(()=>{this.store.addAccount(account);const c=this.realm.createCharacter(id,value.raceId,value.classId,value.name,value.legacy||null);this.realm.persistCharacter(c);});
    }else{const salt=account?.salt||randomHex(O.saltBytes),actual=await passwordHash(value.password,salt);must(account&&equal(account.password,'pbkdf2:'+actual),'onlineBadAuth');}
    const token=randomHex(O.sessionBytes);this.store.deleteAccountSessions(account.id);this.store.addSession(await digest(token),account.id,Date.now()+O.sessionDays*O.dayMs);return json({ok:true,name:this.realm.character(account.id).G.state().name},200,{'set-cookie':`${O.cookie}=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${Math.floor(O.sessionDays*O.dayMs/C.milliseconds)}${url.protocol==='https:'?'; Secure':''}`});
   }
   const c=await this.character(request);
   if(route==='session'&&request.method==='GET')return json({ok:true,state:this.realm.state(c)});
   if(route==='socket'&&request.headers.get('upgrade')?.toLowerCase()==='websocket'){
    must(!request.headers.get('origin')||request.headers.get('origin')===url.origin,'onlineSameOrigin');const pair=new WebSocketPair(),client=pair[0],server=pair[1];server.accept();const write=packet=>{if(packet===null){try{server.close();}catch{}return;}server.send(JSON.stringify(packet));};this.realm.connect(c,write);server.addEventListener('message',event=>{try{this.rate('input:'+c.id,O.inputRate,O.rateWindow*C.milliseconds);must(typeof event.data==='string'&&event.data.length<=O.socketMessageBytes);const value=JSON.parse(event.data);must(value.type==='input');this.realm.input(c,value.x,value.y);}catch(error){server.send(JSON.stringify({event:'error',data:{message:error instanceof GameError?error.message:DB.ui.onlineError}}));}});server.addEventListener('close',()=>{if(this.realm.streams.get(c.id)===write){this.realm.streams.delete(c.id);c.lastSeen=Date.now();c.G.setInput(0,0);}});server.addEventListener('error',()=>{this.realm.streams.delete(c.id);});this.start();return new Response(null,{status:101,webSocket:client});
   }
   if(route==='input'&&request.method==='POST'){this.rate('input:'+c.id,O.inputRate,O.rateWindow*C.milliseconds);const value=await this.body(request);this.realm.input(c,value.x,value.y);return json({ok:true});}
   if(route==='action'&&request.method==='POST'){this.rate('action:'+c.id,O.actionRate,O.rateWindow*C.milliseconds);const value=await this.body(request),result=this.realm.command(c,value.method,value.args||[],value.input||null);return json({...result,state:this.realm.state(c)});}
   if(route==='social'&&request.method==='GET')return json({ok:true,view:this.realm.socialView(c)});
   if(route==='auth/logout'&&request.method==='POST'){this.realm.disconnect(c);this.store.deleteSession(await digest(this.token(request)));return json({ok:true},200,{'set-cookie':O.cookie+'=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0'});}
   return json({ok:false,message:DB.ui.onlineInvalid},404);
  }catch(error){if(!(error instanceof GameError))console.error(error.name+': '+error.message);return json({ok:false,message:error instanceof GameError?error.message:DB.ui.onlineError},error.key==='onlineLoginRequired'?401:400);}
 }
}

export default {
 async fetch(request,env){
  const url=new URL(request.url);if(url.pathname.startsWith('/api/'))return env.WORLD.get(env.WORLD.idFromName(O.realmId)).fetch(request);
  const response=await env.ASSETS.fetch(request),headers=new Headers(response.headers);headers.set('x-content-type-options','nosniff');headers.set('referrer-policy','same-origin');headers.set('content-security-policy',"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self'; media-src 'self' blob:; frame-ancestors 'none'; object-src 'none'; base-uri 'none'");return new Response(response.body,{status:response.status,headers});
 }
};
