'use strict';
const crypto=require('node:crypto');
const {DB,createEngine}=require('./engine.cjs');
const O=DB.online,C=DB.config,clone=v=>JSON.parse(JSON.stringify(v)),distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
class GameError extends Error{constructor(key){super(DB.ui[key]||key);this.key=key;}}
const must=(condition,key='onlineInvalid')=>{if(!condition)throw new GameError(key);};
class Realm {
 constructor(store,options={}){
  this.store=store;this.now=options.now||Date.now;this.random=options.random||(()=>crypto.randomInt(C.randomModulus)/C.randomModulus);this.characters=new Map();this.rooms=new Map();this.streams=new Map();this.chat=[];this.revision=0;this.social=store.social()||{parties:{},guilds:{},listings:{},trades:{},invites:{},duels:{}};
  // An interrupted escrow is returned to mail; a restart never silently consumes it.
  for(const trade of Object.values(this.social.trades))for(const id of trade.members){const c=this.character(id);const offer=trade.offers[id];if(offer)this.mail(c,'mailReturn',offer.items,offer.coins);}
  this.social.trades={};this.social.parties={};this.social.invites={};this.social.duels={};for(const c of this.characters.values()){c.profile.partyId=null;c.profile.duelId=null;}this.persist();
 }
 id(){return crypto.randomUUID();}
 code(){return crypto.randomBytes(O.codeBytes).toString('hex').toUpperCase();}
 time(){return (this.now()-Date.parse(O.epoch))/C.milliseconds;}
 period(kind){return Math.floor(this.now()/(kind==='day'?O.dayMs:O.weekMs));}
 character(id){
  if(this.characters.has(id))return this.characters.get(id);
  const saved=this.store.character(id);must(saved,'onlineLoginRequired');const G=createEngine();must(G.load(saved.state).ok,'saveTransferInvalid');const c={id,G,profile:saved.profile,room:null,lastSeen:0,inputAt:0,active:false,source:null};const interrupted=this.social.duels[c.profile.duelId]?.returns?.[id];if(interrupted)G.enterMap(interrupted.mapId,[interrupted.x,interrupted.y]);else if(G.state().mapId==='duel_arena')G.enterMap(C.startMap,C.startPosition);c.profile.partyId=null;c.profile.duelId=null;this.characters.set(id,c);this.hooks(c);return c;
 }
 createCharacter(id,raceId,classId,name,legacy=null){
  const G=createEngine();must(DB.races.some(r=>r.id===raceId)&&DB.classes.some(c=>c.id===classId));must(G.create(raceId,classId,name).ok);
  let imported=false;if(legacy){must(G.load(legacy).ok,'saveTransferInvalid');const s=G.state(),spent=Object.entries(s.talents).reduce((n,[key,value])=>n+(DB.talents.find(t=>t.id===key)?.cost||0)*value,0),questPoints=DB.quests.filter(q=>s.quests[q.id]?.status==='complete').reduce((n,q)=>n+(q.rewards.points||0),0);must(s.points+spent<=C.startPoints+(s.level-1)*C.pointsPerLevel+questPoints,'saveTransferInvalid');s.masteryLevel=0;s.masteryXp=0;s.masteryPoints=0;s.masteryRanks={};s.spirits={};s.spiritId=null;imported=true;}
  const s=G.state(),delta=this.time()-s.time;this.rebase(s,delta);s.time=this.time();s.name=String(name||s.name).trim().slice(0,O.maxName);s.mapId=C.startMap;s.instances={};s.player.x=C.startPosition[0];s.player.y=C.startPosition[1];G.enterMap(C.startMap,C.startPosition,0,true);for(const item of s.inventory){item.uid=this.id();item.bound=true;item.origin=imported?'legacy':'starter';}s.rng=crypto.randomInt(C.randomModulus);s.collection=Object.fromEntries(s.inventory.map(i=>[i.template,true]));
  const profile={id,legacy:imported,crowns:0,stars:O.startStars,shards:0,honor:0,rating:O.pvpStartRating,metrics:{},periods:{},claims:{},mails:[],spirits:{},pity:0,partyId:null,guildId:null,duelId:null,templates:{},certifiedMaterials:{},titles:[],raidRewards:{},pvpRewards:{}};
  const c={id,G,profile,room:null,lastSeen:0,inputAt:0,active:false,source:null};this.characters.set(id,c);this.hooks(c);return c;
 }
 rebase(value,delta){const keys=new Set(['time','attackAt','skillAt','hurtAt','invulnerableUntil','potionAt','manaPotionAt','dashReadyAt','dashUntil','castingUntil','respawnAt','engagedUntil','until','next','at','completedAt']);const visit=(v)=>{for(const [key,x]of Object.entries(v||{})){if(x&&typeof x==='object')visit(x);else if(typeof x==='number'&&keys.has(key)&&x) v[key]=x+delta;}};visit(value);}
 hooks(c){c.G.setHooks({playerId:c.id,entity:kind=>kind+'_'+this.id(),item:item=>this.newItem(c,item),damage:(e,n,options)=>this.damage(c,e,n,options),kill:e=>this.kill(c,e),skill:(skill,target)=>this.support(c,skill,target),stats:values=>this.adjustStats(c,values)});}
 adjustStats(c,values){const result={...values},s=c.G.state();if(c.profile.duelId){const normalized=O.pvpStats[s.classId];for(const [key,value]of Object.entries(normalized))result[key]=value;result.damageReduction=Math.min(result.damageReduction,O.pvpDamageReductionCap);result.lifesteal=Math.min(result.lifesteal,O.pvpLifestealCap);result.hpRegen=0;result.manaRegen=O.pvpManaRegen;result.basicDamage=Math.min(result.basicDamage,O.pvpModifierMax);result.skillDamage=Math.min(result.skillDamage,O.pvpModifierMax);result.attackSpeed=Math.min(result.attackSpeed,O.pvpModifierMax);result.crit=Math.min(result.crit,O.pvpCritCap);}else{const guild=this.social.guilds[c.profile.guildId];if(guild){const bonus=Math.min(O.guildAuraCap,guild.level*O.guildAuraPerLevel);result.hp*=1+bonus;result.attack*=1+bonus;result.spell*=1+bonus;}}return result;}
 newItem(c,item){item.uid=this.id();item.origin='server';item.bound=!!c.source&&!['drop','certifiedCraft'].includes(c.source);if(c.source==='craft')item.bound=true;c.profile.templates[item.template]=true;c.G.state().collection[item.template]=true;c.profile.metrics.collection=Object.keys(c.profile.templates).length;if(c.G.state().inventory.length>=C.maxInventory){this.mail(c,'mailLoot',[item]);return false;}}
 active(){return [...this.characters.values()].filter(c=>c.active);}
 connect(c,write){must(this.active().length<O.maxPlayers||c.active,'onlineLimit');this.disconnectStream(c.id);c.active=true;c.lastSeen=this.now();c.inputAt=this.now();c.G.state().time=this.time();try{this.attach(c);}catch(error){c.active=false;throw error;}this.streams.set(c.id,write);this.send(c,true);}
 disconnectStream(id){const old=this.streams.get(id);if(old){this.streams.delete(id);try{old(null);}catch{}}}
 disconnect(c){this.disconnectStream(c.id);c.active=false;c.G.setInput(0,0);c.lastSeen=this.now();this.cancelTrades(c.id);this.persist();}
 party(c){return this.social.parties[c.profile.partyId]||null;}
 scope(c){const s=c.G.state(),map=DB.maps[s.mapId];if(!map.group){const current=c.room&&this.rooms.get(c.room);if(current?.mapId===map.id&&current.scope.startsWith('world:'))return current.scope;const ally=this.party(c)?.members.map(id=>this.characters.get(id)).find(peer=>peer?.id!==c.id&&peer?.active&&this.rooms.get(peer.room)?.mapId===map.id);if(ally)return this.rooms.get(ally.room).scope;for(let channel=0;channel<Math.ceil(O.maxPlayers/O.roomPlayers);channel++){const scope='world:'+channel,key=scope+'|'+map.id;if(this.active().filter(peer=>peer.id!==c.id&&peer.room===key).length<O.roomPlayers)return scope;}throw new GameError('onlineMapFull');}if(map.group==='duel')return c.profile.duelId||c.id;const party=this.party(c);const old=c.room&&this.rooms.get(c.room);if(old?.group===map.group)return old.scope;const together=party?.members.map(id=>this.characters.get(id)).find(peer=>peer?.active&&this.rooms.get(peer.room)?.group===map.group);return together?this.rooms.get(together.room).scope:(party?.id||c.id)+':'+this.id();}
 attach(c,forcedScope=null){
  const s=c.G.state(),map=DB.maps[s.mapId];if(map.group==='duel'&&c.profile.duelId){c.room='duel:'+c.profile.duelId;return;}
  const scope=forcedScope||this.scope(c),key=scope+'|'+map.id;let room=this.rooms.get(key);
  if(!room){const saved=this.store.room(key);const instance=saved?.instance||clone(s.instances[s.mapId]||c.G.createInstance(map));room={id:key,mapId:map.id,group:map.group||null,scope,instance,hazards:[],tier:saved?.tier??s.runTier,rule:saved?.rule||s.expeditionRule,last:this.now()};if(!saved&&map.group){const size=this.party(c)?.members.length||1,scale=map.id.startsWith('raid_')?1+Math.max(0,size-O.raidBasePlayers)*O.raidHpPerPlayer:1+Math.max(0,size-1)*O.dungeonHpPerPlayer;for(const e of instance.enemies){e.hp*=scale;e.maxHp*=scale;}}this.rooms.set(key,room);}
  must(this.active().filter(peer=>peer.id!==c.id&&peer.room===key).length<O.roomPlayers,'onlineMapFull');c.room=key;s.instances[s.mapId]=room.instance;s.hazards=room.hazards;s.runTier=room.tier;s.expeditionRule=room.rule;room.last=this.now();
 }
 touch(c){c.lastSeen=this.now();}
 input(c,x,y){must(Number.isFinite(x)&&Number.isFinite(y)&&Math.abs(x)<=1&&Math.abs(y)<=1);this.touch(c);c.inputAt=this.now();c.G.setInput(x,y);}
 metric(c,key,n=1){c.profile.metrics[key]=(c.profile.metrics[key]||0)+n;for(const kind of ['day','week']){const period=kind+':'+this.period(kind);c.profile.periods[period]??={};c.profile.periods[period][key]=(c.profile.periods[period][key]||0)+n;}}
 reward(c,reward){for(const key of ['crowns','stars','shards','honor'])if(reward[key])c.profile[key]+=reward[key];}
 damage(c,enemy,value,options={}){
  if(enemy.duelTarget){const other=this.characters.get(enemy.duelTarget);if(!other||other.profile.duelId!==c.profile.duelId)return enemy.hp;return other.G.applyResolvedDamage(value);}
  const owner=options.sourceOwner&&this.characters.get(options.sourceOwner)||c;enemy.contributions??={};const entry=enemy.contributions[owner.id]||{damage:0,at:0};entry.damage+=value;entry.at=this.time();enemy.contributions[owner.id]=entry;enemy.lastOwner=owner.id;enemy.threat??={};enemy.threat[owner.id]=(enemy.threat[owner.id]||0)+value*owner.G.stats().threatGain;
 }
 kill(c,enemy){
  if(enemy.duelTarget){this.finishDuel(c.profile.duelId,c.id);return;}
  const owner=this.characters.get(enemy.lastOwner)||c,room=this.rooms.get(owner.room);if(!room)return;const contributors=this.active().filter(peer=>peer.room===owner.room&&enemy.contributions?.[peer.id]&&this.time()-enemy.contributions[peer.id].at<=O.contributionTime),eligible=new Map(contributors.map(peer=>[peer.id,peer]));eligible.set(owner.id,owner);
  for(const member of [...eligible.values()]){const party=this.party(member);for(const peer of this.active())if(party?.members.includes(peer.id)&&peer.room===owner.room&&distance(peer.G.state().player,enemy)<=O.shareRadius)eligible.set(peer.id,peer);}
  const count=eligible.size,scale=(1+Math.max(0,count-1)*O.partyXpBonus)/count,m=DB.monsters[enemy.template],guilds=new Set();for(const peer of eligible.values()){
   peer.source='drop';peer.G.awardKill(enemy,scale);peer.source=null;this.metric(peer,'kills');if(this.random()<O.crownsKillChance)peer.profile.crowns+=O.crownsKill;if(m.boss){this.metric(peer,'bosses');peer.profile.crowns+=O.crownsBoss;}
   if(m.raid){this.metric(peer,'raids');const key=enemy.template+':'+this.period('week'),n=peer.profile.raidRewards[key]||0;if(n<O.weeklyRaidRewardCap){peer.profile.crowns+=O.crownsRaid;peer.profile.stars+=O.starsRaid;peer.profile.raidRewards[key]=n+1;}}
   if(peer.profile.guildId)guilds.add(peer.profile.guildId);
  }
  for(const id of guilds){const guild=this.social.guilds[id];if(guild){guild.kills++;if(m.raid)guild.raids++;}}
 }
 support(c,skill){if(!skill.party)return;const party=c.profile.duelId?null:this.party(c),s=c.G.state();for(const peer of this.active())if((peer.id===c.id||party?.members.includes(peer.id))&&peer.room===c.room&&distance(peer.G.state().player,s.player)<=skill.party.range)peer.G.receiveSupport(skill.party,'party:'+skill.name);if(skill.party.taunt){const room=this.rooms.get(c.room);for(const e of room?.instance.enemies||[])if(!e.dead&&distance(e,s.player)<=skill.party.range){e.threat??={};const top=Math.max(0,...Object.values(e.threat));e.threat[c.id]=top+s.level*skill.party.taunt*O.tauntScale;}}}
 tick(){
  this.revision++;for(let sub=0;sub<O.substeps;sub++){
   for(const c of this.active()){if(this.now()-c.inputAt>O.inputTimeout*C.milliseconds)c.G.setInput(0,0);if(this.now()-c.lastSeen>O.offlineGrace*C.milliseconds&&!this.streams.has(c.id)){this.disconnect(c);continue;}if(c.profile.duelId)continue;c.G.state().time=this.time()-C.step;c.G.tick(C.step,true);}
   for(const room of this.rooms.values()){
    const peers=this.active().filter(c=>c.room===room.id&&c.G.state().mapId===room.mapId&&!c.profile.duelId);if(!peers.length)continue;const leader=peers[0];for(const peer of peers){peer.G.state().instances[room.mapId]=room.instance;peer.G.state().hazards=room.hazards;}
    leader.G.updateMechanics();leader.G.updateTrial();for(const e of [...room.instance.enemies]){const living=peers.filter(c=>c.G.state().player.hp>0),engaged=living.filter(c=>distance(c.G.state().player,e)<=C.leashRange);const target=(engaged.length?engaged:living).sort((a,b)=>(e.threat?.[b.id]||0)-(e.threat?.[a.id]||0)||distance(a.G.state().player,e)-distance(b.G.state().player,e))[0];if(target)target.G.stepEnemy(e,C.step);}
    leader.G.updateWorld();for(const peer of peers)peer.G.stepSharedHazards(peer.id);for(const h of room.hazards)if(h.at<=leader.G.state().time&&h.dash&&!h.dashDone){const source=room.instance.enemies.find(e=>e.id===h.source);if(source&&!source.dead)leader.G.moveActor(source,h.dx*h.length*C.hazardDashFraction,h.dy*h.length*C.hazardDashFraction,DB.maps[room.mapId]);h.dashDone=true;}room.hazards=room.hazards.filter(h=>h.expires>this.time()&&(!h.source||room.instance.enemies.some(e=>e.id===h.source&&!e.dead)));
   }
   for(const c of this.active())if(!c.profile.duelId&&this.rooms.get(c.room)?.mapId!==c.G.state().mapId)this.attach(c);
   this.tickDuels();
  }
  this.expire();
 }
 command(c,method,args=[],input=null){
  must(c.active,'onlineLoginRequired');must(typeof method==='string'&&Array.isArray(args)&&args.length<=O.maxArgs);this.touch(c);if(input)this.input(c,input.x,input.y);
  if(method.startsWith('social.'))return this.socialCommand(c,method.slice('social.'.length),args);
  const allowed=new Set(Object.values(O.actionBindings).map(v=>v.method));must(allowed.has(method));must(!c.profile.duelId||O.duelMethods.includes(method),'onlineActionBlocked');const beforeMap=c.G.state().mapId,beforeMaterials=clone(c.G.state().materials),oldRoom=c.room;
  c.source=method==='craft'&&DB.recipes.find(r=>r.id===args[0])&&Object.entries(DB.recipes.find(r=>r.id===args[0]).materials).every(([id,n])=>(c.profile.certifiedMaterials[id]||0)>=n)?'certifiedCraft':method;
  const result=c.G[method](...args);c.source=null;if(!result.ok)return result;
  const s=c.G.state();if(method==='equip'){const item=s.inventory.find(i=>i.id===args[0]);if(item)item.bound=true;}
  for(const [id,n]of Object.entries(s.materials)){const delta=n-beforeMaterials[id];if(delta>0)c.profile.certifiedMaterials[id]=(c.profile.certifiedMaterials[id]||0)+delta;else if(delta<0)c.profile.certifiedMaterials[id]=Math.max(0,(c.profile.certifiedMaterials[id]||0)+delta);}
  const keys={completeQuest:'quests',craft:'crafts',discover:'discoveries',claimEvent:'events'};if(keys[method])this.metric(c,keys[method]);if(method==='completeQuest')c.profile.crowns+=O.crownsQuest;if(method==='claimEvent'){c.profile.crowns+=O.crownsEvent;const party=this.party(c),event=DB.maps[beforeMap].events.find(e=>e.id===args[0]);for(const peer of this.active())if(peer.id!==c.id&&party?.members.includes(peer.id)&&peer.room===oldRoom&&distance(peer.G.state().player,s.player)<=O.shareRadius){peer.G.grant(event.rewards);peer.G.state().metrics['event:'+event.id]=(peer.G.state().metrics['event:'+event.id]||0)+1;this.metric(peer,'events');peer.profile.crowns+=O.crownsEvent;}}
  if(s.mapId!==beforeMap)this.attach(c);this.persist();return result;
 }
 publicPlayer(c){const s=c.G.state(),st=c.G.stats(),guild=this.social.guilds[c.profile.guildId];return {id:c.id,name:s.name,raceId:s.raceId,classId:s.classId,level:s.level,job:s.advancements[3]||s.advancements[2]||s.advancements[1]||null,x:s.player.x,y:s.player.y,hp:s.player.hp,maxHp:st.hp,mp:s.player.mp,maxMp:st.mp,facing:s.player.facing,moving:s.player.moving,lastMoveX:s.player.lastMoveX,lastMoveY:s.player.lastMoveY,guild:guild?.name||'',role:this.party(c)?.roles[c.id]||DB.classes.find(ch=>ch.id===s.classId).onlineRole};}
 frame(c){const s=c.G.state(),room=this.rooms.get(c.room),peers=this.active().filter(p=>p.room===c.room);return {revision:this.revision,time:s.time,mapId:s.mapId,player:clone(s.player),enemies:clone(c.profile.duelId?s.instances[s.mapId].enemies:room?.instance.enemies||[]),hazards:clone(room?.hazards||s.hazards),projectiles:peers.flatMap(p=>clone(p.G.state().projectiles)),effects:peers.flatMap(p=>clone(p.G.state().effects)),floats:peers.flatMap(p=>clone(p.G.state().floats)),orbs:clone(s.orbs),peers:peers.filter(p=>p.id!==c.id).map(p=>this.publicPlayer(p))};}
 state(c){const s=clone(c.G.state()),room=this.rooms.get(c.room);s.instances={[s.mapId]:clone(c.G.instance())};s.hazards=clone(room?.hazards||s.hazards);s.input={x:0,y:0};s.onlinePeers=this.active().filter(p=>p.room===c.room&&p.id!==c.id).map(p=>this.publicPlayer(p));s.networkStats=c.G.stats();s.onlineProfile=clone(c.profile);s.onlineContext=this.context(c);delete s.onlineProfile.certifiedMaterials;return s;}
 context(c){const party=this.party(c),guild=this.social.guilds[c.profile.guildId];return {party:party?{...clone(party),members:party.members.map(id=>{const member=this.character(id);return {...this.publicPlayer(member),online:member.active};})}:null,guild:guild?{...clone(guild),memberCount:guild.members.length}:null,players:this.active().filter(p=>p.room===c.room).map(p=>this.publicPlayer(p)),chat:this.chat.filter(m=>m.room===c.room),invites:Object.values(this.social.invites).filter(i=>i.to===c.id&&i.until>this.now()),trade:Object.values(this.social.trades).find(t=>t.members.includes(c.id))||null,duel:this.social.duels[c.profile.duelId]||null,onlineCount:this.active().length};}
 send(c,full=false){const write=this.streams.get(c.id);if(!write)return;try{write({event:full?'state':'frame',data:full?this.state(c):this.frame(c)});if(full)c.G.state().sounds=[];}catch{this.streams.delete(c.id);}}
 broadcast(full=false){for(const c of this.active())this.send(c,full);}
 persistCharacter(c){const claimed=c.profile.mails.filter(m=>m.claimed).slice(-O.claimedMailHistory),unclaimed=c.profile.mails.filter(m=>!m.claimed);c.profile.mails=[...claimed,...unclaimed];const s=c.G.snapshot();s.instances={[s.mapId]:s.instances[s.mapId]};this.store.saveCharacter(c.id,s,c.profile,this.now());}
 persist(){this.store.transaction(()=>{for(const c of this.characters.values())this.persistCharacter(c);for(const room of this.rooms.values())this.store.saveRoom(room.id,{instance:room.instance,tier:room.tier,rule:room.rule},this.now());this.store.saveSocial(this.social);});}
 atomic(ids,fn){const backup=clone(this.social),chars=[...new Set(ids)].map(id=>this.character(id)),states=chars.map(c=>({state:c.G.snapshot(),profile:clone(c.profile)}));try{return this.store.transaction(()=>{const value=fn();for(const c of this.characters.values())this.persistCharacter(c);for(const room of this.rooms.values())this.store.saveRoom(room.id,{instance:room.instance,tier:room.tier,rule:room.rule},this.now());this.store.saveSocial(this.social);return value;});}catch(error){this.social=backup;chars.forEach((c,i)=>{c.G.load(states[i].state);c.profile=states[i].profile;if(c.active)this.attach(c);});throw error;}}
 close(){for(const c of this.active())this.disconnect(c);this.persist();}
}
Object.assign(Realm.prototype,require('./social.cjs')({DB,O,C,must,GameError,clone,distance}));
module.exports={Realm,GameError,must,DB};
