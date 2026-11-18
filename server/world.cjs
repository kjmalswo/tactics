'use strict';
const crypto=require('node:crypto');
const {DB,createEngine}=require('./engine.cjs');
const O=DB.online,C=DB.config,clone=v=>JSON.parse(JSON.stringify(v)),distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
class GameError extends Error{constructor(key){super(DB.ui[key]||key);this.key=key;}}
const must=(condition,key='onlineInvalid')=>{if(!condition)throw new GameError(key);};
class Realm {
 constructor(store,options={}){
  this.store=store;this.now=options.now||Date.now;this.random=options.random||(()=>crypto.randomInt(C.randomModulus)/C.randomModulus);this.characters=new Map();this.rooms=new Map();this.streams=new Map();this.chat=[];this.revision=0;this.tickRemainder=0;this.lastPulseAt=null;this.social=store.social()||{parties:{},guilds:{},listings:{},trades:{},invites:{},duels:{}};
  this.social.project??={stage:0,score:0,contributors:{}};this.social.project.rewards??={};
  for(const trade of Object.values(this.social.trades))for(const id of trade.members){const c=this.character(id),offer=trade.offers[id];if(offer)this.mail(c,'mailReturn',offer.items,offer.coins);}
  this.social.trades={};this.social.invites={};
  for(const duel of Object.values(this.social.duels))for(const id of duel.members){const c=this.character(id),back=duel.returns[id];c.profile.duelId=null;if(back){c.G.enterMap(back.mapId,[back.x,back.y]);c.G.state().player.hp=Math.min(c.G.stats().hp,back.hp);c.G.state().player.mp=Math.min(c.G.stats().mp,back.mp);}c.profile.location=back?.location||null;}
  this.social.duels={};this.persist();
 }
 id(){return crypto.randomUUID();}
 code(){return crypto.randomBytes(O.codeBytes).toString('hex').toUpperCase();}
 time(){return (this.now()-Date.parse(O.epoch))/C.milliseconds;}
 period(kind){return Math.floor(this.now()/(kind==='day'?O.dayMs:O.weekMs));}
 character(id){
  if(this.characters.has(id))return this.characters.get(id);
  const saved=this.store.character(id);must(saved,'onlineLoginRequired');const G=createEngine();must(G.load(saved.state).ok,'saveTransferInvalid');const c={id,G,profile:saved.profile,room:null,lastSeen:0,inputAt:0,active:false,source:null,locationEpoch:saved.profile.location?.epoch||0,inputQueue:[],receivedSeq:0,appliedSeq:0,appliedElapsed:0,commands:new Map()};
  c.profile.projectRewards??=0;const party=this.social.parties[c.profile.partyId];if(!party?.members.includes(id))c.profile.partyId=null;const guild=this.social.guilds[c.profile.guildId];if(!guild?.members.includes(id))c.profile.guildId=null;
  if(!this.social.duels[c.profile.duelId]){c.profile.duelId=null;if(G.state().mapId==='duel_arena'){G.enterMap(C.startMap,C.startPosition);c.profile.location=null;}}
  this.characters.set(id,c);this.hooks(c);return c;
 }
 createCharacter(id,raceId,classId,name,legacy=null){
  const G=createEngine();must(DB.races.some(r=>r.id===raceId)&&DB.classes.some(c=>c.id===classId));must(G.create(raceId,classId,name).ok);
  let imported=false;if(legacy){must(G.load(legacy).ok,'saveTransferInvalid');const s=G.state(),spent=Object.entries(s.talents).reduce((n,[key,value])=>n+(DB.talents.find(t=>t.id===key)?.cost||0)*value,0),questPoints=DB.quests.filter(q=>s.quests[q.id]?.status==='complete').reduce((n,q)=>n+(q.rewards.points||0),0);must(s.points+spent<=C.startPoints+(s.level-1)*C.pointsPerLevel+questPoints,'saveTransferInvalid');s.masteryLevel=0;s.masteryXp=0;s.masteryPoints=0;s.masteryRanks={};s.spirits={};s.spiritId=null;imported=true;}
  const s=G.state(),delta=this.time()-s.time;this.rebase(s,delta);s.time=this.time();s.name=String(name||s.name).trim().slice(0,O.maxName);s.mapId=C.startMap;s.instances={};s.player.x=C.startPosition[0];s.player.y=C.startPosition[1];G.enterMap(C.startMap,C.startPosition,0,true);for(const item of s.inventory){item.uid=this.id();item.bound=true;item.origin=imported?'legacy':'starter';}s.rng=crypto.randomInt(C.randomModulus);s.collection=Object.fromEntries(s.inventory.map(i=>[i.template,true]));
  const profile={id,legacy:imported,crowns:0,stars:O.startStars,shards:0,honor:0,rating:O.pvpStartRating,metrics:{},periods:{},claims:{},mails:[],spirits:{},pity:0,partyId:null,guildId:null,duelId:null,templates:{},certifiedMaterials:{},titles:[],raidRewards:{},pvpRewards:{}};
  const c={id,G,profile,room:null,lastSeen:0,inputAt:0,active:false,source:null};this.characters.set(id,c);this.hooks(c);return c;
 }
 rebase(value,delta){const keys=new Set(['time','attackAt','skillAt','hurtAt','invulnerableUntil','potionAt','manaPotionAt','dashReadyAt','dashUntil','castingUntil','respawnAt','engagedUntil','until','next','at','completedAt','swapAt','surgeUntil','toolAt','enteredAt','last']);const visit=(v)=>{for(const [key,x]of Object.entries(v||{})){if(x&&typeof x==='object')visit(x);else if(typeof x==='number'&&keys.has(key)&&x) v[key]=x+delta;}};visit(value);}
 hooks(c){c.G.setHooks({playerId:c.id,certify:materials=>{for(const [id,n]of Object.entries(materials))c.profile.certifiedMaterials[id]=(c.profile.certifiedMaterials[id]||0)+n;},progress:(kind,n)=>{this.contribute(c,kind,n);return true;},entity:kind=>kind+'_'+this.id(),item:item=>this.newItem(c,item),damage:(e,n,options)=>this.damage(c,e,n,options),kill:e=>this.kill(c,e),skill:(skill,target)=>this.support(c,skill,target),stats:values=>this.adjustStats(c,values)});}
 adjustStats(c,values){return c.G.adjustRealmStats(values,!!c.profile.duelId,this.social.guilds[c.profile.guildId]?.level||0);}
 newItem(c,item){if(!item.uid){item.uid=this.id();item.origin='server';item.bound=!!item.bound||!!c.source&&!['drop','certifiedCraft'].includes(c.source);}if(c.source==='craft')item.bound=true;c.profile.templates[item.template]=true;c.G.state().collection[item.template]=true;c.profile.metrics.collection=Object.keys(c.profile.templates).length;if(c.G.state().inventory.length>=C.maxInventory){this.mail(c,'mailLoot',[item]);c.G.state().notices.unshift({text:DB.ui.onlineMailOverflow,kind:'info',until:c.G.state().time+C.noticeTime});return false;}}
 active(){return [...this.characters.values()].filter(c=>c.active);}
 connect(c,write){must(this.active().length<O.maxPlayers||c.active,'onlineLimit');if(!this.active().length){this.lastPulseAt=this.now();this.tickRemainder=0;}this.disconnectStream(c.id,'replaced');c.active=true;c.lastSeen=this.now();c.connectionId=this.id();c.receivedSeq=0;c.appliedSeq=0;c.lastRequestSeq=0;c.commands=new Map();this.resetMovement(c);c.G.state().time=this.time();try{this.attach(c);}catch(error){c.active=false;throw error;}this.streams.set(c.id,write);this.revision++;this.send(c,true);}
 disconnectStream(id,reason='replaced'){const old=this.streams.get(id);if(old){this.streams.delete(id);try{if(reason==='replaced')old({event:'replaced',data:{message:DB.ui.onlineReplaced}});old(null,reason);}catch{}}const c=this.characters.get(id);if(c){if(reason==='replaced'){c.connectionId=this.id();c.commands=new Map();this.resetMovement(c);}c.G.setInput(0,0);c.lastSeen=this.now();}}
 disconnect(c){this.disconnectStream(c.id,'logout');c.active=false;this.resetMovement(c);c.lastSeen=this.now();this.cancelTrades(c.id);this.persist();}
 resetMovement(c){c.locationEpoch=(c.locationEpoch||0)+1;c.inputQueue=[];c.appliedSeq=c.receivedSeq||0;c.appliedElapsed=0;c.appliedInputAt=this.time();c.appliedInput={x:0,y:0};c.G.setInput(0,0);if(c.profile.location)c.profile.location.epoch=c.locationEpoch;}
 network(c){return {connectionId:c.connectionId||null,locationEpoch:c.locationEpoch||0,revision:this.revision,ackSeq:c.appliedSeq||0,receivedSeq:c.receivedSeq||0,inputElapsed:c.appliedElapsed||0,dashInput:true,time:c.G.state().time};}
 prepareInput(c,time){
  while(c.inputQueue?.length&&c.inputQueue[0].at<=time){
   const value=c.inputQueue.shift();
   c.appliedSeq=value.seq;c.appliedElapsed=0;c.appliedInput={x:value.x,y:value.y};c.appliedInputAt=value.at;
   if(value.dash){
    c.G.setInput(value.x,value.y);
    c.G.dash();
   }
  }
  const input=time-(c.appliedInputAt||0)>O.inputTimeout?{x:0,y:0}:c.appliedInput||{x:0,y:0};
  c.G.setInput(input.x,input.y);c.appliedElapsed=(c.appliedElapsed||0)+C.step;
 }
 pulse(){const now=this.now(),elapsed=this.lastPulseAt===null?O.tickMs:Math.max(0,now-this.lastPulseAt);this.lastPulseAt=now;this.tick(elapsed);}

 party(c){return this.social.parties[c.profile.partyId]||null;}
 scope(c){
  const s=c.G.state(),map=DB.maps[s.mapId],saved=c.profile.location,current=c.room&&this.rooms.get(c.room);
  if(!map.group){if(current?.mapId===map.id&&current.scope.startsWith('world:'))return current.scope;const ally=this.party(c)?.members.map(id=>this.characters.get(id)).find(peer=>peer?.id!==c.id&&peer?.active&&this.rooms.get(peer.room)?.mapId===map.id);if(ally&&this.active().filter(peer=>peer.id!==c.id&&peer.room===ally.room).length<O.roomPlayers)return this.rooms.get(ally.room).scope;const prior=saved?.mapId===map.id&&saved.scope.startsWith('world:')?saved.scope:null;if(prior&&this.active().filter(p=>p.id!==c.id&&p.room===prior+'|'+map.id).length<O.roomPlayers)return prior;for(let channel=0;channel<Math.ceil(O.maxPlayers/O.roomPlayers);channel++){const scope='world:'+channel,key=scope+'|'+map.id;if(this.active().filter(peer=>peer.id!==c.id&&peer.room===key).length<O.roomPlayers)return scope;}throw new GameError('onlineMapFull');}
  if(map.group==='duel')return c.profile.duelId||c.id;if(!c.room&&!saved){const prior=this.store.findRoom(map.id,s.instances[s.mapId]?.enemies[0]?.id);if(prior)return prior.id.slice(0,prior.id.lastIndexOf('|'));}if(current?.group===map.group)return current.scope;if(!c.room&&saved?.group===map.group)return saved.scope;
  const party=map.onlineScope==='solo'?null:this.party(c),together=party?.members.map(id=>this.character(id)).find(peer=>peer.id!==c.id&&(peer.active&&this.rooms.get(peer.room)?.group===map.group||peer.profile.location?.group===map.group));return together?(this.rooms.get(together.room)?.scope||together.profile.location.scope):(party?.id||c.id)+':'+this.id();
 }
 attach(c,forcedScope=null){
  const s=c.G.state(),map=DB.maps[s.mapId];if(map.group==='duel'&&c.profile.duelId){const key='duel:'+c.profile.duelId;if(c.room!==key)this.resetMovement(c);c.room=key;return;}
  const scope=forcedScope||this.scope(c),key=scope+'|'+map.id;let room=this.rooms.get(key);
  if(!room){const saved=this.store.room(key);const instance=saved?.instance||clone(s.instances[s.mapId]||c.G.createInstance(map));room={id:key,mapId:map.id,group:map.group||null,scope,instance,hazards:[],tier:saved?.tier??s.runTier,rule:saved?.rule||s.expeditionRule,last:this.now()};if(!saved&&map.group){const size=this.party(c)?.members.length||1,scale=map.id.startsWith('raid_')?1+Math.max(0,size-O.raidBasePlayers)*O.raidHpPerPlayer:1+Math.max(0,size-1)*O.dungeonHpPerPlayer;for(const e of instance.enemies){e.hp*=scale;e.maxHp*=scale;}}this.rooms.set(key,room);}
  must(this.active().filter(peer=>peer.id!==c.id&&peer.room===key).length<O.roomPlayers,'onlineMapFull');if(c.room!==key)this.resetMovement(c);c.room=key;c.profile.location={mapId:map.id,group:map.group||null,scope,key,epoch:c.locationEpoch};s.instances[s.mapId]=room.instance;if(map.kind==='field'&&!room.spawnsChecked){c.G.fieldSpawns();room.spawnsChecked=true;}s.hazards=room.hazards;s.runTier=room.tier;s.expeditionRule=room.rule;room.last=this.now();
 }
 touch(c){c.lastSeen=this.now();}
 input(c,x,y,meta={}){must(Number.isFinite(x)&&Number.isFinite(y)&&Math.abs(x)<=1&&Math.abs(y)<=1);if(meta.connectionId&&meta.connectionId!==c.connectionId||meta.locationEpoch!==undefined&&meta.locationEpoch!==c.locationEpoch)return false;const seq=meta.seq===undefined?(c.receivedSeq||0)+1:meta.seq;must(Number.isSafeInteger(seq)&&seq>=0&&seq<=(c.receivedSeq||0)+O.maxInputSequenceGap);if(seq<=(c.receivedSeq||0))return false;c.receivedSeq=seq;this.touch(c);c.inputAt=this.now();c.inputQueue??=[];c.inputQueue.push({seq,x,y,dash:meta.dash===true,at:this.time()});if(c.inputQueue.length>O.maxPendingInputs)c.inputQueue.splice(0,c.inputQueue.length-O.maxPendingInputs);return true;}
 metric(c,key,n=1){c.profile.metrics[key]=(c.profile.metrics[key]||0)+n;for(const kind of ['day','week']){const period=kind+':'+this.period(kind);c.profile.periods[period]??={};c.profile.periods[period][key]=(c.profile.periods[period][key]||0)+n;}}
 reward(c,reward){for(const key of ['crowns','stars','shards','honor'])if(reward[key])c.profile[key]+=reward[key];if(reward.materials){c.G.grant({materials:reward.materials});for(const [id,n]of Object.entries(reward.materials))c.profile.certifiedMaterials[id]=(c.profile.certifiedMaterials[id]||0)+n;}}
 damage(c,enemy,value,options={}){
  if(enemy.duelTarget){const other=this.characters.get(enemy.duelTarget);if(!other||other.profile.duelId!==c.profile.duelId)return enemy.hp;return other.G.applyResolvedDamage(value);}
  const owner=options.sourceOwner&&this.characters.get(options.sourceOwner)||c;enemy.contributions??={};const entry=enemy.contributions[owner.id]||{damage:0,at:0};entry.damage+=value;entry.at=this.time();enemy.contributions[owner.id]=entry;enemy.lastOwner=owner.id;enemy.threat??={};enemy.threat[owner.id]=(enemy.threat[owner.id]||0)+value*owner.G.stats().threatGain;
 }
 kill(c,enemy){
  if(enemy.duelTarget){this.finishDuel(c.profile.duelId,c.id);return;}
  this.revision++;const owner=this.characters.get(enemy.lastOwner)||c,room=this.rooms.get(owner.room);if(!room)return;const contributors=this.active().filter(peer=>peer.room===owner.room&&enemy.contributions?.[peer.id]&&this.time()-enemy.contributions[peer.id].at<=O.contributionTime),eligible=new Map(contributors.map(peer=>[peer.id,peer]));eligible.set(owner.id,owner);
  for(const member of [...eligible.values()]){const party=this.party(member);for(const peer of this.active())if(party?.members.includes(peer.id)&&peer.room===owner.room&&distance(peer.G.state().player,enemy)<=O.shareRadius)eligible.set(peer.id,peer);}
  const count=eligible.size,scale=(1+Math.max(0,count-1)*O.partyXpBonus)/count,m=DB.monsters[enemy.template],guilds=new Set();for(const peer of eligible.values()){
   const materials=clone(peer.G.state().materials);peer.source='drop';try{peer.G.awardKill(enemy,scale);}finally{peer.source=null;}for(const [id,n]of Object.entries(peer.G.state().materials)){const gained=n-(materials[id]||0);if(gained>0)peer.profile.certifiedMaterials[id]=(peer.profile.certifiedMaterials[id]||0)+gained;}this.metric(peer,'kills');if(this.random()<O.crownsKillChance)peer.profile.crowns+=O.crownsKill;if(m.boss){this.metric(peer,'bosses');peer.profile.crowns+=O.crownsBoss;}
   if(m.raid){this.metric(peer,'raids');const key=enemy.template+':'+this.period('week'),n=peer.profile.raidRewards[key]||0;if(n<O.weeklyRaidRewardCap){peer.profile.crowns+=O.crownsRaid;peer.profile.stars+=O.starsRaid;peer.profile.raidRewards[key]=n+1;}}
   if(peer.profile.guildId)guilds.add(peer.profile.guildId);
  }
  for(const id of guilds){const guild=this.social.guilds[id];if(guild){guild.kills++;if(m.raid)guild.raids++;}}
 }
 support(c,skill){if(!skill.party)return;const party=c.profile.duelId?null:this.party(c),s=c.G.state();for(const peer of this.active())if((peer.id===c.id||party?.members.includes(peer.id))&&peer.room===c.room&&distance(peer.G.state().player,s.player)<=skill.party.range)peer.G.receiveSupport(skill.party,'party:'+skill.name);if(skill.party.taunt){const room=this.rooms.get(c.room);for(const e of room?.instance.enemies||[])if(!e.dead&&distance(e,s.player)<=skill.party.range){e.threat??={};const top=Math.max(0,...Object.values(e.threat));e.threat[c.id]=top+s.level*skill.party.taunt*O.tauntScale;}}}
 tick(elapsedMs=O.tickMs){
  const ms=C.step*C.milliseconds,now=this.now(),time=(now-Date.parse(O.epoch))/C.milliseconds;
  this.tickRemainder+=Math.min(Math.max(0,elapsedMs),O.tickMs*O.maxCatchUp);
  const steps=Math.floor(this.tickRemainder/ms);this.tickRemainder-=steps*ms;
  if(!steps)return;
  this.revision++;
  for(let sub=0;sub<steps;sub++){
   const stepTime=time-this.tickRemainder/C.milliseconds-(steps-1-sub)*C.step,groups=new Map(),active=this.active();
   for(const c of active){
    if(now-c.lastSeen>O.offlineGrace*C.milliseconds&&!this.streams.has(c.id)){this.disconnect(c);continue;}
    if(c.profile.duelId)continue;
    const state=c.G.state();state.time=stepTime-C.step;this.prepareInput(c,stepTime);c.G.tick(C.step,true);
    if(this.rooms.get(c.room)?.mapId!==state.mapId){this.attach(c);this.send(c,true);}
    const peers=groups.get(c.room);
    if(peers)peers.push(c);else groups.set(c.room,[c]);
   }
   for(const [id,peers]of groups){
    const room=this.rooms.get(id),leader=peers[0];
    if(!room)continue;
    for(const peer of peers){peer.G.state().instances[room.mapId]=room.instance;peer.G.state().hazards=room.hazards;}
    leader.G.updateMechanics();leader.G.updateTrial();
    const living=peers.filter(c=>c.G.state().player.hp>0).map(c=>({c,p:c.G.state().player}));
    const count=room.instance.enemies.length;
    for(let i=0;i<count;i++){
     const e=room.instance.enemies[i];let target=null,closest=Infinity,top=-Infinity,inRange=false;
     for(const {c,p}of living){
      const d=(p.x-e.x)**2+(p.y-e.y)**2,local=d<=C.leashRange**2,threat=e.threat?.[c.id]||0;
      if(!target||(local!==inRange?local:threat>top||threat===top&&d<closest)){target=c;closest=d;top=threat;inRange=local;}
     }
     if(target)target.G.stepEnemy(e,C.step);
    }
    leader.G.updateWorld();for(const peer of peers)peer.G.stepSharedHazards(peer.id);
    const liveIds=new Set(room.instance.enemies.filter(e=>!e.dead).map(e=>e.id));
    for(const h of room.hazards)if(h.at<=stepTime&&h.dash&&!h.dashDone){
     const source=liveIds.has(h.source)&&room.instance.enemies.find(e=>e.id===h.source);
     if(source)leader.G.moveActor(source,h.dx*h.length*C.hazardDashFraction,h.dy*h.length*C.hazardDashFraction,DB.maps[room.mapId]);
     h.dashDone=true;
    }
    room.hazards=room.hazards.filter(h=>h.expires>stepTime&&(!h.source||liveIds.has(h.source)));
   }
   for(const c of active)if(c.active&&!c.profile.duelId&&this.rooms.get(c.room)?.mapId!==c.G.state().mapId){this.attach(c);this.send(c,true);}
   this.tickDuels(stepTime);
  }
  this.expire();for(const [id,c]of this.characters)if(!c.active&&!this.streams.has(id)&&!c.profile.duelId&&this.now()-c.lastSeen>O.characterIdleMs&&!Object.values(this.social.trades).some(t=>t.members.includes(id))){this.persistCharacter(c);this.characters.delete(id);}
 }
 executeCommand(c,method,args=[],input=null){
  must(c.active,'onlineLoginRequired');must(typeof method==='string'&&Array.isArray(args)&&args.length<=O.maxArgs);this.touch(c);if(input)this.input(c,input.x,input.y,{...input,dash:false});
  if(method.startsWith('social.'))return this.socialCommand(c,method.slice('social.'.length),args);
  const allowed=new Set(Object.values(O.actionBindings).map(v=>v.method));must(allowed.has(method));must(!c.profile.duelId||O.duelMethods.includes(method),'onlineActionBlocked');if(method==='startRift')return this.beginRift(c,args[0],args[1]);const gate=method==='interact'&&c.G.nearby();if(gate?.riftRoute){must(c.G.portalAllowed(gate).ok,'riftLocked');return this.beginRift(c,(c.G.growthState().rift.run?.depth||0)+1,gate.riftRoute);}const beforeMap=c.G.state().mapId,beforeMaterials=clone(c.G.state().materials),oldRoom=c.room;
  c.source=method==='craft'&&DB.recipes.find(r=>r.id===args[0])&&Object.entries(DB.recipes.find(r=>r.id===args[0]).materials).every(([id,n])=>(c.profile.certifiedMaterials[id]||0)>=n)?'certifiedCraft':method;
  let result;try{if(method==='dash'&&input)c.G.setInput(input.x,input.y);result=c.G[method](...args);}finally{c.source=null;}if(!result.ok)return result;
  const s=c.G.state();if(method==='equip'){const item=s.inventory.find(i=>i.id===args[0]);if(item)item.bound=true;}
  for(const [id,n]of Object.entries(s.materials)){const delta=n-beforeMaterials[id];if(delta>0)c.profile.certifiedMaterials[id]=(c.profile.certifiedMaterials[id]||0)+delta;else if(delta<0)c.profile.certifiedMaterials[id]=Math.max(0,(c.profile.certifiedMaterials[id]||0)+delta);}
  const keys={completeQuest:'quests',craft:'crafts',discover:'discoveries',claimEvent:'events',forgeMain:'forges',claimContract:'contracts'};if(keys[method])this.metric(c,keys[method]);if(method==='completeQuest')c.profile.crowns+=O.crownsQuest;if(method==='claimEvent'){c.profile.crowns+=O.crownsEvent;const party=this.party(c),event=DB.maps[beforeMap].events.find(e=>e.id===args[0]);for(const peer of this.active())if(peer.id!==c.id&&party?.members.includes(peer.id)&&peer.room===oldRoom&&distance(peer.G.state().player,s.player)<=O.shareRadius){peer.G.grant(event.rewards);peer.G.state().metrics['event:'+event.id]=(peer.G.state().metrics['event:'+event.id]||0)+1;this.metric(peer,'events');peer.profile.crowns+=O.crownsEvent;}}
  if(s.mapId!==beforeMap)this.attach(c);else if(O.motionResetMethods.includes(method))this.resetMovement(c);return result;
 }
 command(c,method,args=[],input=null,context=null){
  must(c.active,'onlineLoginRequired');must(typeof method==='string'&&Array.isArray(args)&&JSON.stringify(args).length<=O.maxArgumentBytes);if(context?.connectionId)must(context.connectionId===c.connectionId,'onlineStaleAction');c.commands??=new Map();const id=context?.requestId,sequence=context?.requestSeq,signature=JSON.stringify([method,args,input]);if(id){must(typeof id==='string'&&id.length<=O.requestIdLength);const cached=c.commands.get(id);if(cached&&cached.until>this.now()){must(cached.signature===signature);return clone(cached.result);}if(sequence!==undefined)must(Number.isSafeInteger(sequence)&&sequence>(c.lastRequestSeq||0)&&sequence<=(c.lastRequestSeq||0)+O.maxInputSequenceGap,'onlineStaleAction');}if(context?.locationEpoch!==undefined)must(context.locationEpoch===c.locationEpoch,'onlineStaleAction');this.revision++;const sharedRift=method==='startRift'||method==='interact'&&c.G.nearby()?.riftRoute;const damaging=method==='useTool'||method==='useConsumable'&&DB.consumables.find(v=>v.id===args[0])?.tool;const affected=sharedRift?(this.party(c)?.members||[c.id]):damaging?this.active().filter(peer=>peer.room===c.room).map(peer=>peer.id):method==='claimEvent'?[c.id,...this.active().filter(peer=>peer.id!==c.id&&this.party(c)?.members.includes(peer.id)&&peer.room===c.room&&distance(peer.G.state().player,c.G.state().player)<=O.shareRadius).map(peer=>peer.id)]:[c.id];const result=method.startsWith('social.')?this.executeCommand(c,method,args,input):this.atomic(affected,()=>this.executeCommand(c,method,args,input));if(id){if(sequence!==undefined)c.lastRequestSeq=sequence;c.commands.set(id,{result:clone(result),signature,until:this.now()+O.idempotencyMs});while(c.commands.size>O.idempotencyEntries)c.commands.delete(c.commands.keys().next().value);}return result;
 }
 enemyView(enemy){const out={};for(const key of ['id','template','level','x','y','hp','maxHp','guardian','dead','hidden','moving','facing','flash','phase','castingUntil','engagedUntil','growthAffix'])if(enemy[key]!==undefined)out[key]=enemy[key];return out;}
 projectileView(shot){const out={};for(const key of ['id','x','y','vx','vy','life','projectile'])if(shot[key]!==undefined)out[key]=shot[key];return out;}
 statsView(c){if(c.statsRevision!==this.revision){c.statsRevision=this.revision;c.cachedStats=c.G.stats();}return c.cachedStats;}
 publicPlayer(c){const s=c.G.state(),st=this.statsView(c),guild=this.social.guilds[c.profile.guildId];return {id:c.id,name:s.name,raceId:s.raceId,classId:s.classId,level:s.level,job:s.advancements[3]||s.advancements[2]||s.advancements[1]||null,x:s.player.x,y:s.player.y,hp:s.player.hp,maxHp:st.hp,mp:s.player.mp,maxMp:st.mp,facing:s.player.facing,moving:s.player.moving,lastMoveX:s.player.lastMoveX,lastMoveY:s.player.lastMoveY,guild:guild?.name||'',mastery:s.masteryLevel,weaponRank:s.growth.weapon.rank,swing:s.player.swing,armed:!!s.equipment.weapon,dashUntil:s.player.dashUntil,dashX:s.player.dashX,dashY:s.player.dashY,attackFlash:s.player.attackFlash||0,role:this.party(c)?.roles[c.id]||DB.classes.find(ch=>ch.id===s.classId).onlineRole};}
 roomView(c,peers){
  const s=c.G.state(),room=this.rooms.get(c.room);
  const enemies=(c.profile.duelId?s.instances[s.mapId].enemies:room?.instance.enemies||[]).map(e=>this.enemyView(e));
  const hazards=(room?.hazards||s.hazards).map(({hitPlayers,dashDone,...h})=>h);
  return {enemies,hazards,projectiles:peers.flatMap(p=>p.G.state().projectiles.map(shot=>this.projectileView(shot))),
   effects:peers.flatMap(p=>p.G.state().effects.map(e=>({...e}))),floats:peers.flatMap(p=>p.G.state().floats.map(f=>({...f}))),players:peers.map(p=>this.publicPlayer(p))};
 }
 frame(c,view=this.roomView(c,this.active().filter(p=>p.room===c.room))){
  const s=c.G.state(),{players,...shared}=view;
  return {...shared,network:this.network(c),networkStats:this.statsView(c),revision:this.revision,time:s.time,mapId:s.mapId,
   player:clone(s.player),growthCombat:clone(s.growth.combat),orbs:clone(s.orbs),peers:players.filter(p=>p.id!==c.id)};
 }
 state(c){const raw=c.G.state(),{instances,...personal}=raw,s=clone(personal),room=this.rooms.get(c.room),{enemies,...instance}=c.G.instance();s.instances={[s.mapId]:{...clone(instance),enemies:enemies.map(e=>this.enemyView(e))}};s.hazards=clone(room?.hazards||s.hazards);s.input={x:0,y:0};s.onlinePeers=this.active().filter(p=>p.room===c.room&&p.id!==c.id).map(p=>this.publicPlayer(p));s.network=this.network(c);s.networkStats=this.statsView(c);s.onlineProfile=clone(c.profile);s.onlineContext=this.context(c);delete s.onlineProfile.certifiedMaterials;return s;}

 context(c){const party=this.party(c),guild=this.social.guilds[c.profile.guildId];return {party:party?{...clone(party),members:party.members.map(id=>{const member=this.character(id);return {...this.publicPlayer(member),online:member.active};})}:null,guild:guild?{...clone(guild),memberCount:guild.members.length}:null,players:this.active().filter(p=>p.room===c.room).map(p=>this.publicPlayer(p)),chat:this.chat.filter(m=>m.room===c.room),invites:Object.values(this.social.invites).filter(i=>i.to===c.id&&i.until>this.now()),trade:Object.values(this.social.trades).find(t=>t.members.includes(c.id))||null,duel:this.social.duels[c.profile.duelId]||null,onlineCount:this.active().length,project:this.projectView(c)};}
 send(c,full=false,view){
  const write=this.streams.get(c.id);if(!write)return;
  try{write({event:full?'state':'frame',data:full?this.state(c):this.frame(c,view)});if(full)c.G.state().sounds=[];}
  catch{this.streams.delete(c.id);c.lastSeen=this.now();this.resetMovement(c);try{write(null,'error');}catch{}}
 }
 broadcast(full=false){
  const active=this.active();
  if(full){for(const c of active)this.send(c,true);return;}
  const groups=new Map();for(const c of active){const peers=groups.get(c.room);if(peers)peers.push(c);else groups.set(c.room,[c]);}
  for(const peers of groups.values()){
   const view=peers[0].profile.duelId?null:this.roomView(peers[0],peers);
   for(const c of peers)this.send(c,false,view||this.roomView(c,peers));
  }
 }
 persistCharacter(c){const claimed=c.profile.mails.filter(m=>m.claimed).slice(-O.claimedMailHistory),unclaimed=c.profile.mails.filter(m=>!m.claimed);c.profile.mails=[...claimed,...unclaimed];const s=c.G.snapshot({currentMapOnly:true});this.store.saveCharacter(c.id,s,c.profile,this.now());}
 persist(){this.store.transaction(()=>{for(const c of this.characters.values())this.persistCharacter(c);for(const room of this.rooms.values())this.store.saveRoom(room.id,{instance:room.instance,tier:room.tier,rule:room.rule},this.now());this.store.saveSocial(this.social);});}
 atomic(ids,fn){
  const backup=clone(this.social),chars=[...new Set(ids)].map(id=>this.character(id)),states=chars.map(c=>({state:clone({...c.G.state(),instances:{[c.G.state().mapId]:c.G.instance()}}),profile:clone(c.profile),room:c.room,locationEpoch:c.locationEpoch,inputQueue:clone(c.inputQueue||[]),receivedSeq:c.receivedSeq,inputAt:c.inputAt,lastSeen:c.lastSeen,appliedSeq:c.appliedSeq,appliedElapsed:c.appliedElapsed,appliedInput:c.appliedInput,appliedInputAt:c.appliedInputAt})),keys=new Set(this.rooms.keys()),rooms=new Map(chars.filter(c=>this.rooms.has(c.room)).map(c=>[c.room,clone(this.rooms.get(c.room))]));
  try{return this.store.transaction(()=>{const value=fn();if(value?.ok===false)return value;for(const c of chars)this.persistCharacter(c);const changedRooms=new Set([...rooms.keys(),...chars.map(c=>c.room)]);for(const key of changedRooms){const room=this.rooms.get(key);if(room?.group===DB.growth.rift.group&&!this.store.roomUsed(key)){this.rooms.delete(key);this.store.deleteRoom(key);}else if(room)this.store.saveRoom(room.id,{instance:room.instance,tier:room.tier,rule:room.rule},this.now());}this.store.saveSocial(this.social);return value;});}
  catch(error){this.social=backup;for(const key of this.rooms.keys())if(!keys.has(key))this.rooms.delete(key);for(const [key,room]of rooms)this.rooms.set(key,room);chars.forEach((c,i)=>{const saved=states[i];c.G.acceptNetworkState(saved.state);c.profile=saved.profile;c.room=saved.room;c.locationEpoch=saved.locationEpoch;c.inputQueue=saved.inputQueue;c.receivedSeq=saved.receivedSeq;c.inputAt=saved.inputAt;c.lastSeen=saved.lastSeen;c.appliedSeq=saved.appliedSeq;c.appliedElapsed=saved.appliedElapsed;c.appliedInput=saved.appliedInput;c.appliedInputAt=saved.appliedInputAt;c.statsRevision=-1;const room=this.rooms.get(c.room);if(room){c.G.state().instances[room.mapId]=room.instance;c.G.state().hazards=room.hazards;}});for(const c of this.active()){const room=this.rooms.get(c.room);if(room){c.G.state().instances[room.mapId]=room.instance;c.G.state().hazards=room.hazards;}}throw error;}
 }
 close(){for(const c of this.active())this.disconnect(c);this.persist();}
}
Object.assign(Realm.prototype,require('./social.cjs')({DB,O,C,must,GameError,clone,distance}));
module.exports={Realm,GameError,must,DB};
