/* Quarter-view diorama. Simulation, prediction, and collisions still use map coordinates. */
(() => {
'use strict';
const G=window.RPG,DB=G.DB,R=DB.render,C=DB.config,P=DB.theme.colors,M=window.RPGModels,V=DB.graphics.view;
const pitch=V.pitch,vertical=Math.sqrt(1-pitch*pitch),TAU=Math.PI*2,I=V.impact;
const phase=(event,time)=>Math.max(0,Math.min(1,Number.isFinite(event.at)?(time-event.at)/event.maxLife:1-event.life/event.maxLife));
const fades=(start,time,duration)=>Number.isFinite(start)?Math.max(0,Math.min(1,1-(time-start)/duration)):0;
const direction=(dx,dy,facings=8)=>Math.round(Math.atan2(dx,dy)/(TAU/facings))*(TAU/facings);
const screenInput=(x,y)=>{const length=Math.hypot(x,y);if(!length)return {x:0,y:0};const z=y/pitch,n=Math.min(1,length)/Math.hypot(x,z);return {x:x*n,y:z*n};};
const heroPosition=s=>({x:s.player.x+(s.networkView?.x||0),y:s.player.y+(s.networkView?.y||0)});
const drawPosition=o=>({x:o.drawX??o.x,y:o.drawY??o.y});
function surface(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
function ground(map,quality){
 const cell=V.terrainPixels,c=surface(map.width*cell,map.height*cell),ctx=c.getContext('2d');
 for(let y=0;y<map.height;y++)for(let x=0;x<map.width;x++){
  const t=DB.terrain[map.tiles[y][x]],hash=(Math.imul(x+1,C.hashPrime)^Math.imul(y+1,C.hashSeed))>>>0;
  const left=x*cell,top=y*cell;ctx.fillStyle=P[t.color];ctx.fillRect(left,top,cell,cell);
  if(!quality)continue;
  ctx.globalAlpha=(hash%7)/160;ctx.fillStyle=P.paperLight;ctx.fillRect(left,top,cell,cell);ctx.globalAlpha=1;
  const water=t.name==='water'||t.name==='ice'||t.name==='lava',stone=t.name==='floor'||t.name==='stone';
  for(let i=0;i<V.groundDetail[quality];i++){
   const seed=Math.imul(hash+i+1,C.hashPrime)>>>0;
   const px=left+(seed%29)+3,py=top+((seed>>>12)%30)+2;
   ctx.globalAlpha=water?.42:.27;ctx.fillStyle=water?V.wave:stone?P.stoneDark:P.paperLight;
   ctx.beginPath();ctx.ellipse(px,py,water?4:2,stone?1.3:.9,water?-.55:0,0,TAU);ctx.fill();
  }
  if(stone){ctx.globalAlpha=.15;ctx.strokeStyle=P.stoneDark;ctx.strokeRect(left,top,cell,cell);}ctx.globalAlpha=1;
 }
 return c;
}
class Renderer{
 constructor(canvas,mini){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.mini=mini;this.mctx=mini?.getContext('2d');this.camera={x:0,y:0};this.miniTime=0;this.reduceMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)');this.shake=0;this.resize();}
 resize(){const b=this.canvas.getBoundingClientRect();this.width=b.width||C.cameraZoomWidth;this.height=b.height||R.tile*C.targetRadius;this.zoom=Math.max(C.cameraMinZoom,Math.min(C.cameraMaxZoom,this.width/C.cameraZoomWidth));this.unit=R.tile*this.zoom*V.sceneScale;this.dpr=Math.min(window.devicePixelRatio||1,C.renderDpr);this.canvas.width=Math.round(this.width*this.dpr);this.canvas.height=Math.round(this.height*this.dpr);
 if(this.mini){const b=this.mini.getBoundingClientRect();this.mini.width=Math.round((b.width||R.minimapSize)*this.dpr);this.mini.height=Math.round((b.height||R.minimapSize)*this.dpr);this.miniTime=0;}}
 point(x,y,h=0){const dx=x-this.camera.x,dz=y-this.camera.y;return {x:this.width/2+dx*this.unit+this.shake,y:this.height/2+(dz*pitch-h*vertical)*this.unit};}
 visible(p,margin=V.modelMargin){const pad=this.unit*margin;return p.x>=-pad&&p.y>=-pad&&p.x<=this.width+pad&&p.y<=this.height+pad;}
 floorMatrix(){const a=this.unit,o=this.point(0,0);this.ctx.transform(a,0,0,a*pitch,o.x,o.y);}
 ground(map){
  const quality=M.settings().texture;if(this.land?.id!==map.id||this.land.quality!==quality){
   const image=ground(map,quality),obstacles=[];
   for(let y=0;y<map.height;y++)for(let x=0;x<map.width;x++){const t=DB.terrain[map.tiles[y][x]].name;if(t==='rock'||t==='tree')obstacles.push({id:t,x:x+.5,y:y+.5});}
   this.land={id:map.id,quality,image,obstacles};this.miniTime=0;
  }
  const c=this.ctx,edge=this.point(0,map.height);
  c.fillStyle=P.stoneDark;c.fillRect(edge.x,edge.y,map.width*this.unit,this.unit/2);
  const a=this.point(0,0),cell=V.terrainPixels,scaleY=this.unit*pitch;
  const x=Math.max(0,Math.floor(-a.x/this.unit)),y=Math.max(0,Math.floor(-a.y/scaleY));
  const w=Math.min(map.width-x,Math.ceil((this.width-a.x)/this.unit)-x),h=Math.min(map.height-y,Math.ceil((this.height-a.y)/scaleY)-y);
  if(w>0&&h>0)c.drawImage(this.land.image,x*cell,y*cell,w*cell,h*cell,a.x+x*this.unit,a.y+y*scaleY,w*this.unit,h*scaleY);
 }
 shadow(entry,p){
  const level=M.settings().shadow;if(!level)return;
  const c=this.ctx,r=entry.radius*entry.size*this.unit;
  c.save();c.fillStyle=V.shade;c.globalAlpha=V.inkAlpha;if(level>1){c.beginPath();c.ellipse(p.x+r*V.castOffset,p.y+r*V.castOffset,r*1.23,r*pitch,-.15,0,TAU);c.fill();}
  c.beginPath();c.ellipse(p.x,p.y,r,r*pitch,0,0,TAU);c.fill();c.restore();
 }
 actors(map,s,hero){
  const list=[],labels=[],put=(id,x,y,options={})=>{
   const at=this.point(x,y);if(!this.visible(at))return;
   list.push({id,x,y,at,depth:y,size:1,radius:.39,...options});
  },label=(x,y,name,color=P.ivory)=>{if(Math.hypot(x-hero.x,y-hero.y)<R.npcLabelRange)labels.push({x,y,name,color});};
  const region=DB.regions.find(r=>r.maps.includes(map.id))?.id,biomes=DB.graphics.biomes,colors=biomes[map.id]||biomes[region]||biomes.default;
  for(const ob of this.land.obstacles)put(ob.id,ob.x,ob.y,{colors,radius:.47,scenery:true});
  for(const p of map.props){const x=p.x+p.width/2,y=p.y+p.height/2;
   const opt={colors,scenery:true};if(p.type==='house'){opt.scale=[p.width,Math.sqrt(p.width*p.height)*.53,p.height];opt.colors={...colors,roof:P[p.roof]||DB.graphics.palette.roof};opt.radius=(p.width+p.height)/4;label(x,p.y+p.height,p.name);}
   put(p.type,x,y,opt);}
  const inst=G.instance();
  for(const r of map.resources){const at=inst.resources[r.id];if(!at||r.respawn&&s.time-at>=r.respawn)put(r.type,r.x,r.y);}
  for(const ch of map.chests)if(!inst.chests[ch.id])put('chest',ch.x,ch.y);
  for(const m of map.mechanisms)if(!inst.mechanisms[m.id]){put(m.ward?'waystone':'ruin',m.x,m.y);label(m.x,m.y,m.name,P.brassLight);}
  for(const d of map.discoveries)if(s.seenDiscoveries[d.id]||s.discoveries[d.id]){put(d.sprite,d.x,d.y);label(d.x,d.y,d.name);}
  for(const e of map.events)if(s.seenDiscoveries[e.id])put(e.sprite,e.x,e.y);
  for(const p of map.portals){const open=G.portalAllowed(p).ok;put('portal',p.x,p.y,{colors:{gem:open?P.brassLight:P.bark}});label(p.x,p.y,p.name,open?P.brassLight:P.paperShade);}
  for(const n of G.activeNpcs()){
   put(DB.graphics.npcStyle[n.service]||DB.npcTypes[n.service].sprite,n.x,n.y);
   if(Math.hypot(n.x-hero.x,n.y-hero.y)<R.npcLabelRange){
    const qs=DB.quests.filter(q=>q.npc===n.id),ready=qs.some(q=>G.questStatus(q.id)==='ready'),offer=!ready&&qs.some(q=>G.questStatus(q.id)==='available');
    label(n.x,n.y,(ready?DB.ui.questTurninMarker+' ':offer?DB.ui.questMarker+' ':'')+n.name,ready||offer?P.brassLight:P.ivory);}
  }
  const player=(actor,self=false)=>{
   const pos=self?hero:drawPosition(actor),ch=DB.classes.find(c=>c.id===actor.classId),race=DB.races.find(r=>r.id===actor.raceId);if(!ch||!race)return;
   const time=self?s.networkView?.time??s.time:s.time,dashing=actor.dashUntil>time;
   put(ch.sprite,pos.x,pos.y,{...M.heroStyle(race,ch),size:race.scale,urgent:self,actor,weapon:I.styles[ch.id],
    yaw:dashing?direction(actor.dashX,actor.dashY):actor.swing&&fades(actor.swing.at,s.time,I.swingSeconds)?direction(Math.sin(actor.swing.yaw),Math.cos(actor.swing.yaw)):direction(actor.lastMoveX??actor.facing??0,actor.lastMoveY??1),moving:actor.moving,hit:actor.flash>0});
  };
  player({...s.player,classId:s.classId,raceId:s.raceId,weaponRank:s.growth.weapon.rank,armed:!!s.equipment.weapon},true);
  for(const a of s.onlinePeers||[])player(a);
  const comp=G.companionInfo();if(comp){let x=hero.x-(s.player.lastMoveX||s.player.facing)*C.companionFollowDistance,y=hero.y-(s.player.lastMoveY||0)*C.companionFollowDistance;
   if(G.occupied(map,x,y)){x=hero.x;y=hero.y;}put(comp.sprite,x,y,{moving:s.player.moving});label(x,y,comp.name,P.brassLight);}
  for(const e of inst.enemies)if(!e.dead&&!e.hidden){
   const m=DB.monsters[e.template],pos=drawPosition(e);if(!this.visible(this.point(pos.x,pos.y)))continue;const variant=DB.growth.rift.affixes.find(a=>a.id===e.growthAffix)?.color||m.tint;
   const tint=variant?Object.fromEntries(['cloth','fur','stone','wing'].map(c=>[c,variant])):{};
   put(m.model||m.sprite,pos.x,pos.y,{colors:tint,size:m.size,enemy:e,moving:e.moving,hit:e.flash>0,yaw:e.moving||e.castingUntil>s.time?direction(hero.x-pos.x,hero.y-pos.y,DB.graphics.enemyFacings):direction(e.facing||0,1,DB.graphics.enemyFacings)});
  }
  return {list:list.sort((a,b)=>a.depth-b.depth),labels};
 }
 modelFor(entry,hero){
  const {id,x,y,colors,overlay,yaw,scale}=entry,lod=M.settings().lod;
  const detail=lod===1&&(x-hero.x)**2+(y-hero.y)**2>V.farTiles**2?0:lod;
  return M.view(id,{colors,overlay,yaw,scale,lod:detail,hidePart:entry.weapon?'blade':undefined});
 }
 drawModel(entry,s,hero){
  const {x,y,at,size}=entry,c=this.ctx,quality=M.settings(),u=this.unit*size;
  const time=entry.urgent?s.networkView?.time??s.time:s.time;
  const dashing=entry.actor?.dashUntil>time;
  const img=entry.urgent?entry.image:this.modelFor(entry,hero);
  const walk=entry.moving?Math.sin(s.time*R.walkRate):0;
  const bob=-Math.abs(walk)*V.walkLift*u;
  const swing=entry.actor?.swing;
  const strength=swing?fades(swing.at,s.time,I.swingSeconds):0;
  const turn=strength?swing.yaw-entry.yaw:0;
  const behind=Math.cos(strength?swing.yaw:entry.yaw)<0;
  this.shadow(entry,at);
  if(dashing)this.dashStreak(entry,time);
  if(entry.actor?.weaponRank&&quality.effects)this.weaponAura({...entry.actor,x,y});
  const showWeapon=entry.weapon&&entry.actor.armed!==false;
  if(showWeapon&&behind)this.swingWeapon(entry,u,bob,strength);
  c.save();c.translate(at.x,at.y+bob);
  if(img){
   const hp=this.point(hero.x,hero.y),relX=hp.x-at.x,relY=hp.y-at.y;
   if(entry.scenery&&entry.depth>hero.y&&relX>=img.left*u&&relX<=(img.left+img.width)*u&&relY>=img.top*u&&relY<(img.top+img.height)*u+this.unit)c.globalAlpha=V.occlude;
   c.rotate((dashing&&!this.reduceMotion?.matches?entry.actor.dashX*V.dashLean:walk*V.walkLean)+Math.sin(turn)*strength*V.swingLean);
   if(entry.hit)c.filter='brightness('+R.hitBrightness+')';
   c.drawImage(img.canvas,img.left*u,img.top*u,img.width*u,img.height*u);
  }else if(entry.enemy||entry.actor){c.fillStyle=entry.enemy?P.oxblood:P.olive;c.beginPath();c.ellipse(0,-u*.46,u*.27,u*.42,0,0,TAU);c.fill();}
  c.restore();
  if(showWeapon&&!behind)this.swingWeapon(entry,u,bob,strength);
  if(entry.urgent&&s.player.shield>0){c.save();c.strokeStyle=P.brassLight;c.globalAlpha=R.portalAlpha;c.beginPath();c.ellipse(at.x,at.y-u*.58,u*.48,u*.66,0,0,TAU);c.stroke();c.restore();}
  if(entry.actor&&img)this.headHeights.set(entry.urgent?'self':entry.actor.id,-img.top*u);
  if(entry.enemy&&img){const e=entry.enemy,m=DB.monsters[e.template];if(m.boss||e.hp>=e.maxHp&&s.targetId!==e.id&&!e.guardian&&!m.faction)return;
   const yTop=at.y+img.top*u-R.healthBarOffset,w=R.barWidth*this.zoom;
   this.enemyTags.push({e,m,at,yTop,w});}
 }
 dashStreak(entry,time){
  const actor=entry.actor,c=this.ctx,at=entry.at,u=this.unit;
  const travelled=Math.max(0,Math.min(1,1-(actor.dashUntil-time)/C.dashDuration))*C.dashDistance;
  if(!travelled)return;
  const length=Math.min(R.dashTrailSpacing*R.dashTrailCount,travelled),dx=actor.dashX*u*length,dy=actor.dashY*u*pitch*length;
  if(!Number.isFinite(dx+dy))return;
  c.save();c.globalAlpha=V.dashOpacity;c.strokeStyle=P.paperLight;c.lineWidth=V.dashLine;c.lineCap='round';
  c.beginPath();for(let i=0;i<R.dashTrailCount;i++){
   const y=at.y-u*R.shadowRadius-i*V.dashLineGap;
   c.moveTo(at.x,y);c.lineTo(at.x-dx*(1-i/R.dashTrailCount),y-dy*(1-i/R.dashTrailCount));
  }
  c.stroke();c.restore();
 }
 swingWeapon(entry,u,bob,remaining){
  const c=this.ctx,actor=entry.actor,at=entry.at,aim=remaining?actor.swing.yaw:entry.yaw;
  const progress=1-remaining,sweep=Math.sin(progress*Math.PI/2),angle=remaining?aim+(sweep-.5)*I.sweep:aim;
  const height=I.height+(remaining?Math.cos(progress*Math.PI)*I.lift:0),horizontal=remaining?1:.38;
  const point=(along,side=0,lift=0)=>{
   const dx=Math.sin(angle)*along*horizontal+Math.cos(angle)*(side+I.handWidth);
   const dz=Math.cos(angle)*along*horizontal-Math.sin(angle)*(side+I.handWidth);
   const [x,y]=M.project(dx,height+lift,dz);
   return [at.x+x*u,at.y+y*u+bob];
  };
  const tipHeight=remaining?.08:I.lift;
  const handle=point(I.hilt),tip=point(I.reach,0,tipHeight);
  c.save();c.lineCap='round';
  if(remaining&&M.settings().effects){
   c.strokeStyle=I.flash;c.globalAlpha=remaining*.75;c.lineWidth=I.trailWidth;
   c.beginPath();for(let i=0;i<=I.sparks;i++){
    const theta=angle-I.sweep*i/I.sparks*sweep,x=at.x+Math.sin(theta)*I.reach*u,y=at.y+(Math.cos(theta)*I.reach*pitch-height*vertical)*u+bob;
    if(i)c.lineTo(x,y);else c.moveTo(x,y);
   }c.stroke();c.globalAlpha=1;
  }
  c.lineWidth=I.bladeWidth*u;c.strokeStyle=I.grip;c.beginPath();c.moveTo(...point(0));c.lineTo(...(entry.weapon==='mace'?tip:handle));c.stroke();
  c.fillStyle=I.trim;c.beginPath();c.ellipse(...handle,I.bladeWidth*u, I.bladeWidth*.55*u,0,0,TAU);c.fill();
  if(entry.weapon==='mace'){
   c.fillStyle=I.metalDark;c.beginPath();c.ellipse(...tip,I.bladeWidth*1.55*u,I.bladeWidth*1.33*u,0,0,TAU);c.fill();
   c.fillStyle=I.metal;c.beginPath();c.ellipse(tip[0],tip[1]-I.bladeWidth*.55*u,I.bladeWidth*1.2*u,I.bladeWidth*.74*u,0,0,TAU);c.fill();
  }else{
   c.fillStyle=I.metal;c.beginPath();c.moveTo(...point(I.hilt,-I.bladeWidth));c.lineTo(...tip);c.lineTo(...point(I.hilt,I.bladeWidth));c.fill();
   c.strokeStyle=I.metalDark;c.lineWidth=1;c.beginPath();c.moveTo(...handle);c.lineTo(...tip);c.stroke();
  }
  c.restore();
 }
 sparks(s){
  const c=this.ctx;c.save();for(const e of s.effects.slice(-V.fxLimit[2])){const f=phase(e,s.time),at=this.point(e.x,e.y),r=Math.min(e.radius,V.sparkRange)*this.unit*f;
   if(f>=1)continue;c.fillStyle=e.color;c.globalAlpha=1-f;for(let i=0;i<V.sparkCount;i++){const angle=TAU*i/V.sparkCount+f;c.beginPath();c.arc(at.x+Math.cos(angle)*r,at.y+Math.sin(angle)*r*pitch-this.unit*V.walkLift,R.orbRadius*(1-f),0,TAU);c.fill();}}
  c.restore();
 }
 hazards(){
  const c=this.ctx,s=G.state();c.save();this.floorMatrix();c.lineWidth=R.hazardLine/this.unit;
  for(const h of s.hazards){
   if(!this.visible(this.point(h.x,h.y),h.radius+(h.length||0)))continue;
   const angle=Math.atan2(h.dy||0,h.dx||0);c.save();c.translate(h.x,h.y);c.rotate(angle);c.fillStyle=P.hazard;c.strokeStyle=P.hazard;c.beginPath();
   if(h.kind==='line')c.rect(0,-h.radius,h.length,h.radius*2);
   else if(h.kind==='cone'){c.moveTo(0,0);c.arc(0,0,h.radius,-h.angle/2,h.angle/2);c.closePath();}
   else{c.arc(0,0,h.radius,0,TAU);if(h.kind==='ring'){c.moveTo(h.innerRadius,0);c.arc(0,0,h.innerRadius,0,TAU,true);}}
   c.globalAlpha=h.at<=s.time?R.portalAlpha:R.hazardAlpha;c.fill('evenodd');c.globalAlpha=1;c.stroke();c.restore();
  }c.restore();
 }
 render(dt=0){
  const s=G.state();if(!s)return;const map=G.mapDef(),hero=heroPosition(s),changed=this.lastMap!==map.id;
  const blend=changed?1:Math.min(1,dt*C.cameraLerp);this.camera.x+=(hero.x-this.camera.x)*blend;this.camera.y+=(hero.y-this.camera.y)*blend;this.lastMap=map.id;
  const hurt=fades(s.player.hurtAt,s.time,I.hurtSeconds),quality=M.settings().effects;
  this.shake=quality&&!this.reduceMotion?.matches?Math.sin(hurt*TAU)*hurt*I.shake:0;
  const c=this.ctx;c.setTransform(this.dpr,0,0,this.dpr,0,0);c.imageSmoothingEnabled=true;c.fillStyle=V.clear;c.fillRect(0,0,this.width,this.height);
  this.ground(map);this.hazards();this.enemyTags=[];this.headHeights=new Map();
  const {list,labels}=this.actors(map,s,hero);M.begin();
  const self=list.find(e=>e.urgent);if(self)self.image=this.modelFor(self,hero);
  for(const e of list)this.drawModel(e,s,hero);
  if(G.worldPhase().night){c.save();c.globalAlpha=R.nightAlpha;c.fillStyle=P.nightTint;c.fillRect(0,0,this.width,this.height);c.restore();}
  for(const {e,m,at,yTop,w} of this.enemyTags){
   c.fillStyle=P.woodDeep;c.fillRect(at.x-w/2-1,yTop-1,w+2,R.barHeight+2);
   c.fillStyle=m.faction?V.factionColor:e.guardian?P.brass:P.hp;c.fillRect(at.x-w/2,yTop,w*Math.max(0,e.hp/e.maxHp),R.barHeight);
   if(m.faction||e.guardian||s.targetId===e.id)this.text((m.faction?V.factionMark+' ':'')+(e.growthAffix?(DB.growth.rift.affixes.find(v=>v.id===e.growthAffix)?.name||'')+' ':'')+m.name+' '+DB.ui.level+e.level,at.x,yTop-R.healthBarOffset,m.faction?V.factionColor:P.ivory,R.nameFont);
  }
  for(const l of labels){const p=this.point(l.x,l.y);this.label(l.name,p.x,p.y+R.npcNameOffset,l.color);}
  this.effects();if(quality===2)this.sparks(s);
  if(hurt>0&&quality){const vignette=c.createRadialGradient(this.width/2,this.height/2,this.height/5,this.width/2,this.height/2,Math.hypot(this.width,this.height)/2);
   vignette.addColorStop(0,'transparent');vignette.addColorStop(1,I.edge);c.save();c.globalAlpha=hurt*I.flashAlpha;c.fillStyle=vignette;c.fillRect(0,0,this.width,this.height);c.restore();}
  this.playerNameplates();this.navigation();this.miniTime-=dt;if(this.miniTime<=0){this.minimap();this.miniTime=V.miniInterval;}
 }
 text(value,x,y,color=P.ivory,size=R.nameFont,align='center'){const c=this.ctx;c.save();c.font=`600 ${size}px ${DB.theme.fonts.body}`;c.textAlign=align;c.textBaseline='middle';c.lineJoin='round';c.strokeStyle=R.textShadow;c.lineWidth=R.labelStroke;c.strokeText(String(value),x,y);c.fillStyle=color;c.fillText(String(value),x,y);c.restore();}
 label(value,x,y,color=P.ivory,size=R.nameFont){const c=this.ctx;c.save();c.font=`600 ${size}px ${DB.theme.fonts.body}`;const w=c.measureText(String(value)).width+R.labelPadding*2;c.fillStyle=R.labelBg;c.fillRect(x-w/2,y-size/2-R.labelPadding,w,size+R.labelPadding*2);this.text(value,x,y,color,size);c.restore();}
 weaponAura(actor){const cfg=R.forgeAura,rank=actor.weaponRank||0;if(!rank)return;const tier=[...cfg.tiers].reverse().find(t=>rank>=t.rank),p=this.point(actor.x,actor.y),c=this.ctx,radius=(cfg.radius+Math.sin(G.state().time*cfg.speed)*cfg.pulse)*this.unit;c.save();c.strokeStyle=tier.color;c.fillStyle=tier.color;c.lineWidth=cfg.line*this.zoom;c.globalAlpha=tier.alpha;c.beginPath();c.ellipse(p.x,p.y,radius,radius*R.shadowSquash,0,0,TAU);c.stroke();c.globalAlpha=cfg.attackAlpha;c.beginPath();c.arc(p.x+(actor.facing||1)*this.unit*cfg.weaponX,p.y-this.unit*cfg.weaponY,cfg.sparkRadius*this.unit,0,TAU);c.fill();if(actor.attackFlash>0){const centerX=p.x+(actor.facing||1)*this.unit*cfg.weaponX,centerY=p.y-this.unit*cfg.weaponY;c.beginPath();c.arc(centerX,centerY,cfg.attackRadius*this.unit,(actor.facing<0?Math.PI:0)+cfg.startAngle,(actor.facing<0?Math.PI:0)+cfg.endAngle);c.stroke();}c.restore();}
 playerNameplate(actor,self=false){
  const cfg=R.playerNameplate,ch=DB.classes.find(v=>v.id===actor.classId),race=DB.races.find(v=>v.id===actor.raceId);if(!cfg.enabled||!ch||!race)return;
  const p=this.point(actor.x,actor.y),scale=Math.max(cfg.minScale,Math.min(cfg.maxScale,this.zoom)),headHeight=(this.headHeights.get(self?'self':actor.id)||1.6*race.scale*this.unit)+V.headGap*this.unit;
  if(p.x<0||p.x>this.width||p.y<0||p.y>this.height+headHeight)return;
  const party=G.state().onlineContext?.party,ally=party?.members.some(member=>member.id===actor.id),color=self?cfg.selfColor:ally?cfg.partyColor:cfg.peerColor,job=DB.branches[actor.job]?.name||ch.name;
  const name=actor.name||DB.ui.nameFallback,guild=actor.guild?cfg.guildPrefix+actor.guild+cfg.guildSuffix+' ':'';
  const lines=[{value:guild+name,font:cfg.nameFont,color},{value:[DB.ui.level+actor.level,job].join(cfg.separator),font:cfg.detailFont,color:cfg.detailColor}];
  const c=this.ctx;c.save();const padding=cfg.padding*scale,margin=cfg.screenMargin;let width=cfg.minWidth*scale;for(const line of lines){c.font=`600 ${line.font*scale}px ${DB.theme.fonts.body}`;width=Math.max(width,c.measureText(line.value).width+padding*2);}width=Math.min(width,cfg.maxWidth*scale,this.width-margin*2);if(width<=padding*2){c.restore();return;}
  const lineHeight=cfg.lineHeight*scale,barHeight=cfg.barHeight*scale,barGap=cfg.barGap*scale,height=padding*2+lines.length*lineHeight+cfg.bars.length*barHeight+Math.max(0,cfg.bars.length-1)*barGap,x=Math.max(margin,Math.min(this.width-width-margin,p.x-width/2)),y=Math.max(margin,p.y-headHeight-cfg.headGap*scale-height);
  c.fillStyle=cfg.background;c.fillRect(x,y,width,height);c.beginPath();c.rect(x,y,width,height);c.clip();
  lines.forEach((line,index)=>{c.font=`600 ${line.font*scale}px ${DB.theme.fonts.body}`;c.textAlign='center';c.textBaseline='middle';c.strokeStyle=R.textShadow;c.lineWidth=R.labelStroke;c.fillStyle=P[line.color];const mid=y+padding+(index*lineHeight)+lineHeight/2;c.strokeText(line.value,x+width/2,mid,width-padding*2);c.fillText(line.value,x+width/2,mid,width-padding*2);});
  for(const [index,bar]of cfg.bars.entries()){const ratio=actor[bar.max]>0?Math.max(0,Math.min(1,actor[bar.value]/actor[bar.max])):0,bx=x+padding,by=y+padding+lines.length*lineHeight+index*(barHeight+barGap),bw=width-padding*2;c.fillStyle=P[cfg.barBackground];c.fillRect(bx,by,bw,barHeight);c.fillStyle=P[bar.color];c.fillRect(bx,by,bw*ratio,barHeight);}c.restore();
 }
 playerNameplates(){const s=G.state(),st=G.stats();for(const actor of s.onlinePeers||[])this.playerNameplate({...actor,x:actor.drawX??actor.x,y:actor.drawY??actor.y});this.playerNameplate({...s.player,id:s.onlineProfile?.id,name:s.name,raceId:s.raceId,classId:s.classId,level:s.level,mastery:s.masteryLevel,job:G.selectedBranches().at(-1),guild:s.onlineContext?.guild?.name,maxHp:st.hp,maxMp:st.mp,x:s.player.x+(s.networkView?.x||0),y:s.player.y+(s.networkView?.y||0)},true);}
 effects(){const s=G.state(),c=this.ctx;for(const shot of s.projectiles){const p=this.point(shot.drawX??shot.x,shot.drawY??shot.y),def=DB.projectiles[shot.projectile],angle=Math.atan2(shot.vy*pitch,shot.vx);c.save();c.translate(p.x,p.y);c.rotate(angle);c.strokeStyle=def.color;c.fillStyle=def.color;c.lineWidth=R.projectileLine*this.zoom;if(def.trail){c.globalAlpha=R.portalAlpha;c.beginPath();c.moveTo(-def.width*this.unit,0);c.lineTo(0,0);c.stroke();c.globalAlpha=1;c.beginPath();c.arc(0,0,def.width*this.unit/2,0,TAU);c.fill();}else{c.beginPath();c.moveTo(-def.width*this.unit,0);c.lineTo(0,0);c.lineTo(-def.width*this.unit/2,-def.radius*this.unit);c.moveTo(0,0);c.lineTo(-def.width*this.unit/2,def.radius*this.unit);c.stroke();}c.restore();}for(const e of s.effects.slice(-V.fxLimit[M.settings().effects])){const f=phase(e,s.time);if(f>=1||!this.visible(this.point(e.x,e.y)))continue;if(e.kind==='criticalImpact'||e.kind==='impact'){this.impact(e,s.time);continue;}const p=this.point(e.x,e.y);c.save();c.globalAlpha=1-f;c.strokeStyle=e.color;c.fillStyle=e.color;c.lineWidth=R.hazardLine;if(e.kind==='chain'&&e.to){const end=this.point(e.to.x,e.to.y);c.beginPath();c.moveTo(p.x,p.y-this.unit*R.shadowRadius);for(let i=1;i<C.lightningSegments;i++){const t=i/C.lightningSegments;c.lineTo(p.x+(end.x-p.x)*t+Math.sin(i*Math.PI)*R.screenShake,p.y+(end.y-p.y)*t-this.unit*R.shadowRadius);}c.lineTo(end.x,end.y-this.unit*R.shadowRadius);c.stroke();}else{const radius=e.radius*this.unit*(R.effectPulse+f*(1-R.effectPulse));c.beginPath();c.ellipse(p.x,p.y-this.unit*R.shadowRadius,radius,radius*R.shadowSquash,0,0,TAU);c.stroke();}c.restore();}for(const orb of (M.settings().effects?s.orbs:[])){const p=this.point(orb.x,orb.y);c.fillStyle=P.loot;c.beginPath();c.arc(p.x,p.y,R.orbRadius*this.zoom,0,TAU);c.fill();}for(const f of s.floats){
  const p=this.point(f.x,f.y,I.floatHeight),progress=phase(f,s.time);if(progress>=1||!this.visible(p,1))continue;
  const rise=1-Math.pow(1-progress,2),gold=f.kind==='gold',scale=(f.kind==='critical'?I.critScale:gold?I.goldScale:1)*(1+Math.sin(progress*TAU)*I.pop*(1-progress));
  c.save();c.globalAlpha=Math.min(1,(1-progress)*3);this.text(f.text,p.x,p.y-rise*R.floatRise+(gold?I.floatLane:0),P[f.color]||f.color,R.floatFont*this.zoom*scale);c.restore();
 }}
 impact(e,time){
  const q=M.settings().effects;if(!q)return;
  const age=Number.isFinite(e.at)?time-e.at:phase(e,time)*e.maxLife,life=Math.max(0,1-age/I.hitSeconds);if(!life)return;
  const p=this.point(e.x,e.y,I.floatHeight),c=this.ctx,r=this.unit*e.radius*(1-life*.7),count=e.kind==='criticalImpact'?I.sparks+2:I.sparks;
  c.save();c.globalAlpha=life;c.lineWidth=1+life;c.strokeStyle=e.color;c.beginPath();
  for(let i=0;i<count;i++){const theta=TAU*i/count+e.x;
   c.moveTo(p.x+r*Math.cos(theta),p.y+r*Math.sin(theta));
   c.lineTo(p.x+(r+this.unit*I.sparkLength)*Math.cos(theta),p.y+(r+this.unit*I.sparkLength)*Math.sin(theta));}
  c.stroke();c.restore();
 }
 navigation(){const target=G.navigationTarget();if(!target)return;const p=this.point(target.x,target.y),c=this.ctx,margin=R.navigationMargin,tx=Math.max(margin,Math.min(this.width-margin,p.x)),ty=Math.max(Math.min(R.navigationTop,this.height/2),Math.min(this.height-Math.min(R.navigationBottom,this.height/2),p.y)),angle=Math.atan2(p.y-this.height/2,p.x-this.width/2),r=R.navigationRadius;c.save();c.translate(tx,ty);c.fillStyle=R.labelBg;c.strokeStyle=P.brassLight;c.lineWidth=R.navigationLine;c.beginPath();c.arc(0,0,r,0,TAU);c.fill();c.stroke();c.rotate(angle);c.beginPath();c.moveTo(r/2,0);c.lineTo(-r/3,-r/3);c.lineTo(-r/3,r/3);c.closePath();c.fillStyle=P.brassLight;c.fill();c.restore();this.label(target.label,tx,ty+R.navigationLabelOffset,P.brassLight,R.navigationFont);}
 minimap(){if(!this.mctx)return;const map=G.mapDef(),s=G.state(),c=this.mctx,w=this.mini.width,h=this.mini.height,pad=R.mini.padding*this.dpr;
  const a=Math.min((w-pad*2)/map.width,(h-pad*2)/map.height),ox=(w-map.width*a)/2,oy=(h-map.height*a)/2;
  c.fillStyle=P.woodDeep;c.fillRect(0,0,w,h);c.drawImage(this.land.image,ox,oy,map.width*a,map.height*a);
  const dot=(pt,color,r=R.mini.dot)=>{c.fillStyle=color;c.beginPath();c.arc(ox+pt.x*a,oy+pt.y*a,r*this.dpr,0,TAU);c.fill();};
  for(const n of G.activeNpcs())dot(n,R.mini.npcColor);for(const p of map.portals)dot(p,R.mini.portalColor);for(const poi of map.discoveries)if(s.seenDiscoveries[poi.id]||s.discoveries[poi.id])dot(poi,R.mini.discoveryColor);for(const event of map.events)if(s.seenDiscoveries[event.id])dot(event,R.mini.eventColor);for(const m of map.mechanisms)if(!G.instance().mechanisms[m.id])dot(m,R.mini.discoveryColor);for(const e of G.instance().enemies)if(!e.dead&&!e.hidden)dot(e,e.guardian?R.mini.guardColor:R.mini.enemyColor);for(const peer of s.onlinePeers||[])dot(peer,R.mini.peerColor);dot(s.player,R.mini.playerColor,R.mini.playerRadius);}
}
window.RPGRenderer=Renderer;window.RPGScreenInput=screenInput;
})();
