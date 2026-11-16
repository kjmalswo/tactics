/* Real workerd/Durable Object/WebSocket API checks; local-only, no browser automation. */
'use strict';
const assert=require('node:assert/strict'),crypto=require('node:crypto'),WebSocket=require('ws');
const base=process.argv[2]||'http://127.0.0.1:8787';assert(['127.0.0.1','localhost'].includes(new URL(base).hostname),'this check only creates accounts in a local Worker');
const clients=[];let error;
async function api(client,path,body){const response=await fetch(base+'/api/v1/'+path,{method:body===undefined?'GET':'POST',headers:{'content-type':'application/json','x-game-request':'1',...(client?.cookie?{cookie:client.cookie}:{})},body:body===undefined?undefined:JSON.stringify(body)});const data=await response.json(),cookie=response.headers.get('set-cookie');if(client&&cookie)client.cookie=cookie.split(';')[0];return data;}
async function connect(client){const socket=new WebSocket(base.replace(/^http/,'ws')+'/api/v1/socket',{headers:{cookie:client.cookie,origin:base}});client.socket=socket;client.frames=[];const first=new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Worker socket timeout')),10000);socket.on('message',data=>{const packet=JSON.parse(data);client.frames.push(packet);if(packet.event==='state'){client.state=packet.data;clearTimeout(timer);resolve();}});socket.on('error',reject);});await first;}
(async()=>{
 const health=await api(null,'health');assert(health.ok);assert.equal(health.backend,'durable-object-sqlite');assert.equal(health.transport,'websocket');
 for(const [i,classId]of ['warrior','guardian'].entries()){const c={username:'cf_'+crypto.randomBytes(4).toString('hex'),password:'local-worker-check',classId};clients.push(c);const registered=await api(c,'auth/register',{username:c.username,password:c.password,name:'CF검증'+i,raceId:'human',classId});assert(registered.ok,JSON.stringify(registered));await connect(c);}
 const [a,b]=clients;const act=(c,method,args=[])=>api(c,'action',{method,args});
 assert((await api(a,'session')).state.onlinePeers.some(p=>p.name===b.state.name));
 assert((await act(a,'social.party.create')).ok);const state=(await api(a,'session')).state;assert((await act(b,'social.party.join',[state.onlineContext.party.code])).ok);assert.equal((await api(a,'session')).state.onlineContext.party.members.length,2);
 assert(!(await act(a,'gainXp',[999999])).ok);assert(!(await act(a,'enterMap',['eclipse_throne'])).ok);assert(!(await api(a,'input',{x:20,y:0})).ok);
 const start=(await api(a,'session')).state.player.x;a.socket.send(JSON.stringify({type:'input',x:1,y:0}));await new Promise(resolve=>setTimeout(resolve,180));a.socket.send(JSON.stringify({type:'input',x:0,y:0}));const moved=(await api(a,'session')).state.player.x;assert(moved>start&&moved-start<2,'authoritative Worker movement');
 const before=(await api(a,'session')).state.onlineProfile.stars,draw=await act(a,'social.summon',[1]);assert(draw.ok);assert.equal(draw.draws.length,1);assert.equal(draw.state.onlineProfile.stars,before-1);
 const oldCookie=a.cookie;assert((await api(a,'auth/login',{username:a.username,password:a.password})).ok);assert.equal((await api(a,'session')).state.onlineProfile.stars,before-1,'SQLite saved progress survives login');assert(!(await api({cookie:oldCookie},'session')).ok,'prior cookie is revoked');
 assert(!(await api(a,'auth/register',{username:'cf_'+crypto.randomBytes(4).toString('hex'),password:a.password,name:'이관검증',raceId:'human',classId:'warrior',legacy:{}})).ok,'public unsigned import is disabled');
 console.log('PASS: Cloudflare workerd SQLite, two authenticated WebSockets, peer visibility, shared party, server-only movement, illegal-write rejection, summon persistence and session revocation.');
})().catch(e=>{error=e;console.error(e);process.exitCode=1;}).finally(async()=>{for(const c of clients){c.socket?.terminate();try{await api(c,'auth/logout',{});}catch{}}if(error)process.exit(1);});
