/* Real workerd/Durable Object/WebSocket API checks; local-only, no browser automation. */
'use strict';
const assert=require('node:assert/strict'),crypto=require('node:crypto'),WebSocket=require('ws');
const base=process.argv[2]||'http://127.0.0.1:8787';assert(['127.0.0.1','localhost'].includes(new URL(base).hostname),'this check only creates accounts in a local Worker');
const clients=[];let error,protocol;
async function api(client,path,body){if(client?.cookie&&['action','input'].includes(path)){const current=await fetch(base+'/api/v1/session',{headers:{cookie:client.cookie}}).then(r=>r.json());if(current.ok){client.net=current.state.network;if(path==='action'&&!body.context)body={...body,context:{connectionId:client.net.connectionId,locationEpoch:client.net.locationEpoch,requestId:crypto.randomUUID(),requestSeq:(client.requestSeq=(client.requestSeq||0)+1)}};if(path==='input')body={...body,connectionId:client.net.connectionId,locationEpoch:client.net.locationEpoch,seq:(client.inputSeq=(client.inputSeq||0)+1)};}}const response=await fetch(base+'/api/v1/'+path,{method:body===undefined?'GET':'POST',headers:{'content-type':'application/json','x-game-request':'1',...(client?.cookie?{cookie:client.cookie}:{})},body:body===undefined?undefined:JSON.stringify(body)});const data=await response.json(),cookie=response.headers.get('set-cookie');if(client&&cookie)client.cookie=cookie.split(';')[0];return data;}
async function connect(client){const socket=new WebSocket(base.replace(/^http/,'ws')+'/api/v1/socket?protocol='+protocol,{headers:{cookie:client.cookie,origin:base}});client.socket=socket;const frames=client.frames=[];client.inputSeq=0;client.requestSeq=0;const first=new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Worker socket timeout')),10000);socket.on('message',data=>{const packet=JSON.parse(data);frames.push(packet);if(packet.event==='state'){client.state=packet.data;client.net=packet.data.network;clearTimeout(timer);resolve();}});socket.on('error',reject);});await first;}
(async()=>{
 const health=await api(null,'health');assert(health.ok);protocol=health.protocol;assert.equal(health.backend,'durable-object-sqlite');assert.equal(health.transport,'websocket');
 for(const [i,classId]of ['warrior','guardian'].entries()){const c={username:'cf_'+crypto.randomBytes(4).toString('hex'),password:'local-worker-check',classId};clients.push(c);const registered=await api(c,'auth/register',{username:c.username,password:c.password,name:'CF검증'+i,raceId:'human',classId});assert(registered.ok,JSON.stringify(registered));await connect(c);assert.equal(c.state.growth.version,1);assert.equal(c.state.growth.weapon.rank,0);assert(c.state.onlineContext.project.goal>0);}
 const [a,b]=clients;const act=(c,method,args=[])=>api(c,'action',{method,args});
 assert((await api(a,'session')).state.onlinePeers.some(p=>p.name===b.state.name));
 assert((await act(a,'social.party.create')).ok);const state=(await api(a,'session')).state;assert((await act(b,'social.party.join',[state.onlineContext.party.code])).ok);assert.equal((await api(a,'session')).state.onlineContext.party.members.length,2);
 assert(!(await act(a,'startRift',[1,'cinder'])).ok,'unprepared low-level Rift entry is rejected');assert(!(await act(a,'forgeMain')).ok,'the real forge service checks location and costs');assert(!(await act(a,'social.project.claim')).ok,'community rewards require a pending entitlement');assert.equal((await api(a,'session')).state.growth.weapon.rank,0);assert(!(await act(a,'gainXp',[999999])).ok);assert(!(await act(a,'enterMap',['eclipse_throne'])).ok);assert(!(await api(a,'input',{x:20,y:0})).ok);
 const start=(await api(a,'session')).state.player.x;a.socket.send(JSON.stringify({type:'input',x:1,y:0,...a.net,seq:(a.inputSeq=(a.inputSeq||0)+1)}));await new Promise(resolve=>setTimeout(resolve,180));a.socket.send(JSON.stringify({type:'input',x:0,y:0,...a.net,seq:(a.inputSeq=(a.inputSeq||0)+1)}));const moved=(await api(a,'session')).state.player.x;assert(moved>start&&moved-start<2,'authoritative Worker movement');
 const oldNet=a.net,oldFrames=a.frames,oldSocket=a.socket;await connect(a);assert.notEqual(a.net.connectionId,oldNet.connectionId,'new socket gets exclusive control');await new Promise(resolve=>setTimeout(resolve,80));assert(oldFrames.some(p=>p.event==='replaced'),'prior socket is explicitly replaced');assert.equal(oldSocket.readyState,WebSocket.CLOSED);assert(!(await api(a,'action',{method:'potion',args:[],context:{...oldNet,requestId:'stale-socket',requestSeq:1}})).ok,'prior connection cannot execute actions');const resumed=(await api(a,'session')).state.player.x;a.socket.send(JSON.stringify({type:'input',x:1,y:0,...a.net,seq:++a.inputSeq}));await new Promise(resolve=>setTimeout(resolve,180));a.socket.send(JSON.stringify({type:'input',x:0,y:0,...a.net,seq:++a.inputSeq}));assert((await api(a,'session')).state.player.x>resumed,'old close callback cannot clear new input');
 const before=(await api(a,'session')).state.onlineProfile.stars,draw=await act(a,'social.summon',[1]);assert(draw.ok);assert.equal(draw.draws.length,1);assert.equal(draw.state.onlineProfile.stars,before-1);
 const oldCookie=a.cookie;assert((await api(a,'auth/login',{username:a.username,password:a.password})).ok);assert.equal((await api(a,'session')).state.onlineProfile.stars,before-1,'SQLite saved progress survives login');assert(!(await api({cookie:oldCookie},'session')).ok,'prior cookie is revoked');await connect(a);assert((await api(a,'session')).ok,'fresh authenticated socket reconnects');
 assert(!(await api(a,'auth/register',{username:'cf_'+crypto.randomBytes(4).toString('hex'),password:a.password,name:'이관검증',raceId:'human',classId:'warrior',legacy:{}})).ok,'public unsigned import is disabled');
 const {DB}=require('../server/engine.cjs'),C=DB.config,O=DB.online;
 const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 const send=(c,x,y,dash=false)=>c.socket.send(JSON.stringify({type:'input',connectionId:c.net.connectionId,locationEpoch:c.net.locationEpoch,seq:++c.inputSeq,x,y,dash}));
 const latest=c=>c.frames.findLast(p=>p.event==='frame')?.data||c.state;
 const startDash=latest(a).player.x;send(a,1,0,true);send(a,0,0);
 await pause((C.dashDuration+.24)*C.milliseconds);
 const dashFrames=a.frames.filter(p=>p.event==='frame').map(p=>p.data.player);
 assert(dashFrames.some(p=>p.x>startDash+.3&&p.x<startDash+C.dashDistance-.3),'dash travels through intermediate server positions');
 assert(Math.abs(latest(a).player.x-startDash-C.dashDistance)<.15,'dash distance on ordered input stream');
 const east=DB.maps.oakwood.portals[0];
 for(let n=0;n<50&&latest(a).player.x<east.x-1.5;n++){send(a,1,0);await pause(O.clientInputMs);}
 send(a,0,0);
 const entered=await act(a,'interact');assert(entered.ok&&entered.state.mapId==='meadow','real portal into the field');
 a.net=entered.state.network;await pause(O.frameMs*2);
 for(let n=0;n<34&&latest(a).player.x<8.0;n++){send(a,1,0);await pause(O.clientInputMs);}
 send(a,0,0);
 const first=latest(a);assert.equal(first.mapId,'meadow');assert(first.player.x>=7,'player continues after entering field');
 await pause(1200);
 const field=a.frames.filter(p=>p.event==='frame'&&p.data.mapId==='meadow');
 const slime=field.map(p=>p.data.enemies.find(e=>e.template==='slime')).filter(Boolean);
 assert(new Set(slime.map(e=>e.x+','+e.y)).size>3,'nearby monsters keep moving on the live Worker');
 assert(field.some(p=>p.data.hazards.length||p.data.floats.length||p.data.effects.length),'field combat keeps emitting authoritative events');
 console.log('PASS: Cloudflare workerd SQLite, two authenticated WebSockets, peer visibility, shared party, server-only movement, illegal-write rejection, summon persistence, growth guards, session revocation, ordered dash, field monster movement and combat.');
})().catch(e=>{error=e;console.error(e);process.exitCode=1;}).finally(async()=>{for(const c of clients){c.socket?.terminate();try{await api(c,'auth/logout',{});}catch{}}if(error)process.exit(1);});
