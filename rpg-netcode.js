/* Input history and visual reconciliation. Contains no networking or game authority. */
(() => {
'use strict';
class MovementHistory {
 constructor(options,step,predict,predictDash){this.options=options;this.step=step;this.predict=predict;this.predictDash=predictDash;this.clear();}
 clear(){this.connectionId=null;this.locationEpoch=-1;this.sequence=0;this.segments=[];this.lastSent=-Infinity;this.motionRevision=-1;this.stateRevision=-1;this.ackSeq=0;this.ackedElapsed=0;this.clock=0;this.offset={x:0,y:0};}
 bind(meta){if(!meta)return false;const reset=meta.connectionId!==this.connectionId||meta.locationEpoch!==this.locationEpoch;if(reset){if(meta.connectionId!==this.connectionId)this.stateRevision=-1;this.connectionId=meta.connectionId;this.ackSeq=meta.ackSeq||0;this.ackedElapsed=meta.inputElapsed||0;this.locationEpoch=meta.locationEpoch;this.segments=[];this.sequence=meta.receivedSeq||0;this.lastSent=-Infinity;this.motionRevision=-1;this.clock=meta.time||0;this.offset={x:0,y:0};}return reset;}
 context(){return {connectionId:this.connectionId,locationEpoch:this.locationEpoch};}
 packet(input,now,force=false){
  const length=Math.max(1,Math.hypot(input.x,input.y)),x=input.x/length,y=input.y/length,last=this.segments.at(-1);
  if(!force&&last&&last.x===x&&last.y===y&&now-this.lastSent<this.options.clientInputMs)return null;
  const segment={seq:++this.sequence,x,y,duration:0};this.segments.push(segment);this.lastSent=now;
  return {...this.context(),seq:segment.seq,x,y};
 }
 dash(actor,input,now){
  const result=this.predictDash(actor,input,this.clock);
  if(!result.ok)return result;
  const packet=this.packet(input,now,true);
  this.segments.at(-1).dash=true;
  return {...result,packet:{...packet,dash:true}};
 }
 sample(actor,input,dt,now){
  const packet=this.packet(input,now),last=this.segments.at(-1);
  const pending=this.segments.reduce((n,s)=>n+Math.max(0,s.duration-(s.seq===this.ackSeq?this.ackedElapsed:0)),0);
  const x=actor.x,y=actor.y;
  if(last&&pending<this.options.maxPredictionSeconds){
   const duration=Math.min(dt,this.options.maxPredictionSeconds-pending);last.duration+=duration;this.advance(actor,last,duration);
  }
  if(this.segments.length>this.options.maxPendingInputs)this.segments.splice(0,this.segments.length-this.options.maxPendingInputs);
  this.smooth(actor.x-x,actor.y-y,dt);
  return packet;
 }
 smooth(dx,dy,dt){
  const distance=Math.hypot(this.offset.x,this.offset.y);
  if(distance<this.options.motionEpsilon){this.offset={x:0,y:0};return;}
  const blend=Math.min(1-Math.exp(-this.options.predictionLerp*dt),this.options.predictionCorrectionSpeed*dt/distance);
  let x=this.offset.x*blend,y=this.offset.y*blend;
  const motion=Math.hypot(dx,dy);
  if(motion>this.options.motionEpsilon){
   // Never let a correction reverse movement along the current travel direction.
   const ux=dx/motion,uy=dy/motion,excess=Math.max(0,x*ux+y*uy-motion);
   x-=ux*excess;y-=uy*excess;
  }
  this.offset.x-=x;this.offset.y-=y;
 }
 advance(actor,input,duration){let left=duration;while(left>this.options.motionEpsilon){const dt=Math.min(this.step,left);this.predict(actor,input,dt,this.clock);this.clock+=dt;left-=dt;}}
 reconcile(actor,authoritative,meta,previousActor=actor){
  if(!meta||meta.revision<this.motionRevision&&meta.connectionId===this.connectionId)return false;
  const display={x:previousActor.x+this.offset.x,y:previousActor.y+this.offset.y},reset=this.bind(meta);
  Object.assign(actor,authoritative);
  this.clock=meta.time;this.ackSeq=meta.ackSeq;this.ackedElapsed=meta.inputElapsed;
  this.segments=this.segments.filter(s=>s.seq>=meta.ackSeq);
  for(const segment of this.segments){
   const acknowledged=segment.seq===meta.ackSeq;
   if(segment.dash&&!acknowledged)this.predictDash(actor,segment,this.clock);
   this.advance(actor,segment,Math.max(0,segment.duration-(acknowledged?meta.inputElapsed:0)));
  }
  this.offset=reset?{x:0,y:0}:{x:display.x-actor.x,y:display.y-actor.y};
  this.motionRevision=meta.revision;return true;
 }
}
window.RPGNetcode={MovementHistory};
})();
