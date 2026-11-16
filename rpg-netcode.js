/* Input history and visual reconciliation. Contains no networking or game authority. */
(() => {
'use strict';
class MovementHistory {
 constructor(options,step,predict){this.options=options;this.step=step;this.predict=predict;this.clear();}
 clear(){this.connectionId=null;this.locationEpoch=-1;this.sequence=0;this.segments=[];this.lastSent=-Infinity;this.motionRevision=-1;this.stateRevision=-1;this.ackSeq=0;this.ackedElapsed=0;this.clock=0;this.offset={x:0,y:0};}
 bind(meta){if(!meta)return false;const reset=meta.connectionId!==this.connectionId||meta.locationEpoch!==this.locationEpoch;if(reset){if(meta.connectionId!==this.connectionId)this.stateRevision=-1;this.connectionId=meta.connectionId;this.ackSeq=meta.ackSeq||0;this.ackedElapsed=meta.inputElapsed||0;this.locationEpoch=meta.locationEpoch;this.segments=[];this.sequence=meta.receivedSeq||0;this.lastSent=-Infinity;this.motionRevision=-1;this.clock=meta.time||0;this.offset={x:0,y:0};}return reset;}
 context(){return {connectionId:this.connectionId,locationEpoch:this.locationEpoch};}
 packet(input,now,force=false){const length=Math.hypot(input.x,input.y),x=input.x/Math.max(1,length),y=input.y/Math.max(1,length),last=this.segments.at(-1);if(force||!last||last.x!==x||last.y!==y||now-this.lastSent>=this.options.clientInputMs){const segment={seq:++this.sequence,x,y,duration:0};this.segments.push(segment);this.lastSent=now;return {...this.context(),seq:segment.seq,x,y};}return null;}
 sample(actor,input,dt,now){const packet=this.packet(input,now),last=this.segments.at(-1),pending=this.segments.reduce((n,s)=>n+Math.max(0,s.duration-(s.seq===this.ackSeq?this.ackedElapsed:0)),0);if(last&&pending<this.options.maxPredictionSeconds){const duration=Math.min(dt,this.options.maxPredictionSeconds-pending);last.duration+=duration;this.advance(actor,last,duration);}
  if(this.segments.length>this.options.maxPendingInputs)this.segments.splice(0,this.segments.length-this.options.maxPendingInputs);const decay=Math.exp(-this.options.predictionLerp*dt);this.offset.x*=decay;this.offset.y*=decay;if(Math.hypot(this.offset.x,this.offset.y)<this.options.motionEpsilon)this.offset={x:0,y:0};return packet;}
 advance(actor,input,duration){let left=duration;while(left>this.options.motionEpsilon){const dt=Math.min(this.step,left);this.predict(actor,input,dt,this.clock);this.clock+=dt;left-=dt;}}
 reconcile(actor,authoritative,meta){if(!meta)return false;if(meta.revision<this.motionRevision&&meta.connectionId===this.connectionId)return false;const display={x:actor.x+this.offset.x,y:actor.y+this.offset.y},reset=this.bind(meta);Object.assign(actor,authoritative);this.clock=meta.time;this.ackSeq=meta.ackSeq;this.ackedElapsed=meta.inputElapsed;this.segments=this.segments.filter(s=>s.seq>=meta.ackSeq);for(const segment of this.segments){const duration=Math.max(0,segment.duration-(segment.seq===meta.ackSeq?meta.inputElapsed:0));this.advance(actor,segment,duration);}const error=Math.hypot(display.x-actor.x,display.y-actor.y);this.offset=!reset&&error<this.options.predictionSnap?{x:display.x-actor.x,y:display.y-actor.y}:{x:0,y:0};this.motionRevision=meta.revision;return true;}
}
window.RPGNetcode={MovementHistory};
})();
