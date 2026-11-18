/* Orthographic 3D model baker. Meshes live in model space, never in a realm snapshot.
   A depth buffer resolves faces and equipment, then identical views share a bounded atlas. */
(() => {
'use strict';
const art=window.GAME_DB.graphics,v=art.view,side=Math.SQRT1_2,up=Math.sqrt(1-v.pitch*v.pitch);
const geometry=new Map(),atlas=new Map(),portraits=new Map(),rgb=new Map();
let settings={...art.defaults},pixels=0,deadline=Infinity,gpu;
const clock=()=>performance.now();
function project(x,h,z){return [(x-z)*side,(x+z)*side*v.pitch-h*up,(x+z)*side*up+h*v.pitch];}
function readColor(hex){if(!rgb.has(hex))rgb.set(hex,[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255));return rgb.get(hex);}
function primitive(shape,lod){
 const key=shape+lod;if(geometry.has(key))return geometry.get(key);
 const vertices=[],indices=[];
 function vertex(p,n){const length=Math.hypot(...n)||1;vertices.push([...p,...n.map(t=>t/length)]);return vertices.length-1;}
 function face(points){
  const [a,b,c]=points,ab=b.map((n,i)=>n-a[i]),ac=c.map((n,i)=>n-a[i]);
  const n=[ab[1]*ac[2]-ab[2]*ac[1],ab[2]*ac[0]-ab[0]*ac[2],ab[0]*ac[1]-ab[1]*ac[0]];
  const ids=points.map(p=>vertex(p,n));for(let i=1;i<ids.length-1;i++)indices.push(ids[0],ids[i],ids[i+1]);
 }
 if(shape==='box'||shape==='gable'){
  const cross=shape==='box'?[[-1,-1],[1,-1],[1,1],[-1,1]]:[[-1,-1],[1,-1],[0,1]];
  const front=cross.map(([x,h])=>[x,h,1]),back=cross.map(([x,h])=>[x,h,-1]);face(front);face([...back].reverse());
  for(let i=0;i<cross.length;i++){const j=(i+1)%cross.length;face([back[i],back[j],front[j],front[i]]);}
 }else{
  const slices=v.meshSlices[lod],rows=shape==='ball'?v.meshRings[lod]:1;
  for(let j=0;j<=rows;j++){
   const t=j/rows,angle=(t-.5)*Math.PI,h=shape==='ball'?Math.sin(angle):2*t-1;
   const radius=shape==='ball'?Math.cos(angle):shape==='cone'?1-t:1;
   for(let i=0;i<slices;i++){const phi=i/slices*Math.PI*2,x=Math.cos(phi),z=Math.sin(phi);
    const p=[radius*x,h,radius*z],n=shape==='ball'?p:[x,shape==='cone'?.5:0,z];vertex(p,n);}
  }
  for(let j=0;j<rows;j++)for(let i=0;i<slices;i++){
   const a=j*slices+i,b=j*slices+(i+1)%slices;indices.push(a,a+slices,b,b,a+slices,b+slices);
  }
  if(shape!=='ball')for(const cap of (shape==='cone'?[-1]:[-1,1])){
   const center=vertex([0,cap,0],[0,cap,0]),rim=[];
   for(let i=0;i<slices;i++){const a=Math.PI*2*i/slices;rim.push(vertex([Math.cos(a),cap,Math.sin(a)],[0,cap,0]));}
   for(let i=0;i<slices;i++)indices.push(center,rim[i],rim[(i+1)%slices]);
  }
 }
 const mesh={vertices,indices};geometry.set(key,mesh);return mesh;
}
function makeMesh(id,overlay,colors,yaw,scale,lod){
 const m=art.models[id],pal={...art.palette,...m.colors,...colors},vertices=[],indices=[];
 const cos=Math.cos(yaw),sin=Math.sin(yaw),bounds=[Infinity,Infinity,Infinity,-Infinity,-Infinity,-Infinity];
 for(const group of (overlay?m.parts.concat(overlay):m.parts))for(const [shape,material,x,h,z,a,b,c,tilt] of art.parts[group]){
  const mesh=primitive(shape,lod),base=vertices.length/9,col=readColor(pal[material]),ct=Math.cos(tilt),st=Math.sin(tilt);
  for(const [vx,vy,vz,nx,ny,nz] of mesh.vertices){
   const px=(vx*a*ct-vy*b*st+x)*scale[0],py=(vx*a*st+vy*b*ct+h)*scale[1],pz=(vz*c+z)*scale[2];
   const point=project(px*cos+pz*sin,py,pz*cos-px*sin);
   const lx=(nx/a*ct-ny/b*st)/scale[0],ly=(nx/a*st+ny/b*ct)/scale[1],lz=nz/c/scale[2],len=Math.hypot(lx,ly,lz)||1;
   vertices.push(...point,(lx*cos+lz*sin)/len,ly/len,(lz*cos-lx*sin)/len,...col);
   for(let k=0;k<3;k++){bounds[k]=Math.min(bounds[k],point[k]);bounds[k+3]=Math.max(bounds[k+3],point[k]);}
  }
  for(const index of mesh.indices)indices.push(base+index);
 }
 return {vertices:new Float32Array(vertices),indices:new Uint16Array(indices),bounds};
}
// The atlas uses one small, reusable GPU target. Losing it only switches the baker.
function initGPU(){
 if(!window.WebGLRenderingContext)return null;
 const target=document.createElement('canvas'),gl=target.getContext('webgl',{depth:true,alpha:true,antialias:false,preserveDrawingBuffer:false});
 if(!gl)return null;
 const program=gl.createProgram();
 function compile(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));gl.attachShader(program,s);gl.deleteShader(s);}
 compile(gl.VERTEX_SHADER,`attribute vec3 position, normal, color;
 uniform vec3 origin, span; varying vec3 n, base, pos;
 void main(){ vec3 p=(position-origin)/span; gl_Position=vec4(2.*p.x-1.,1.-2.*p.y,1.-2.*p.z,1.); n=normal; base=color; pos=position; }`);
 compile(gl.FRAGMENT_SHADER,`precision mediump float; varying vec3 n,base,pos; uniform vec3 sun; uniform float light,textureLevel;
 void main(){ vec3 norm=normalize(n);float diffuse=max(dot(norm,sun),0.);
 float lum=light<0.5?0.96:0.72+0.38*diffuse+0.07*norm.y;
 float sheen=light>1.5?0.12*pow(max(dot(norm,normalize(sun+vec3(0.55,0.58,0.55))),0.),12.):0.;
 float grain=textureLevel>0.5?0.015*sin(39.*pos.x+6.*sin(pos.y*17.)):0.;
 if(textureLevel>1.5)grain+=0.012*cos((pos.y+pos.z)*92.);
 gl_FragColor=vec4(base*(lum+grain)+vec3(sheen,sheen*0.94,sheen*0.76),1.); }`);
 gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));
 const vb=gl.createBuffer(),ib=gl.createBuffer(),attrs=['position','normal','color'].map(k=>gl.getAttribLocation(program,k));
 const u=Object.fromEntries(['origin','span','sun','light','textureLevel'].map(k=>[k,gl.getUniformLocation(program,k)]));
 return (mesh,out,origin,span)=>{
  if(gl.isContextLost())return false;
  if(target.width!==out.width)target.width=out.width;if(target.height!==out.height)target.height=out.height;
  gl.viewport(0,0,out.width,out.height);gl.useProgram(program);gl.enable(gl.DEPTH_TEST);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
  gl.bindBuffer(gl.ARRAY_BUFFER,vb);gl.bufferData(gl.ARRAY_BUFFER,mesh.vertices,gl.STREAM_DRAW);attrs.forEach((a,i)=>{gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,3,gl.FLOAT,false,36,i*12);});
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ib);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,mesh.indices,gl.STREAM_DRAW);
  gl.uniform3fv(u.origin,origin);gl.uniform3fv(u.span,span);gl.uniform3fv(u.sun,v.sun);gl.uniform1f(u.light,settings.light);gl.uniform1f(u.textureLevel,settings.texture);
  gl.drawElements(gl.TRIANGLES,mesh.indices.length,gl.UNSIGNED_SHORT,0);
  if(gl.isContextLost())return false;out.getContext('2d').drawImage(target,0,0);return true;
 };
}
// Z-buffered software rasterization for devices with disabled or lost WebGL.
function raster(mesh,out,origin,res){
 const ctx=out.getContext('2d'),w=out.width,h=out.height,img=ctx.createImageData(w,h);if(!img?.data)return;
 const zbuf=new Float32Array(w*h);zbuf.fill(-Infinity);const a=mesh.vertices,idx=mesh.indices,verts=[];
 for(let k=0;k<a.length;k+=9){
  const n=a.subarray(k+3,k+6),d=Math.max(0,n[0]*v.sun[0]+n[1]*v.sun[1]+n[2]*v.sun[2]);
  const lit=settings.light ? .72+.38*d+.07*n[1] : .96,shine=settings.light>1 ? .10*Math.pow(d,8) : 0;
  verts.push([(a[k]-origin[0])*res,(a[k+1]-origin[1])*res,a[k+2],...a.subarray(k+6,k+9).map(c=>(c*lit+shine)*255)]);
 }
 for(let tri=0;tri<idx.length;tri+=3){
  const [a,b,c]=[verts[idx[tri]],verts[idx[tri+1]],verts[idx[tri+2]]],dx=b[0]-a[0],dy=b[1]-a[1],ex=c[0]-a[0],ey=c[1]-a[1],det=dx*ey-dy*ex;
  if(Math.abs(det)<1e-7)continue;
  const x0=Math.max(0,Math.floor(Math.min(a[0],b[0],c[0]))),x1=Math.min(w-1,Math.ceil(Math.max(a[0],b[0],c[0]))),y1=Math.min(h-1,Math.ceil(Math.max(a[1],b[1],c[1])));
  for(let y=Math.max(0,Math.floor(Math.min(a[1],b[1],c[1])));y<=y1;y++)for(let x=x0;x<=x1;x++){
   const rx=x+.5-a[0],ry=y+.5-a[1],u=(rx*ey-ry*ex)/det,t=(dx*ry-dy*rx)/det,s=1-u-t;if(Math.min(u,t,s)<0)continue;
   const z=s*a[2]+u*b[2]+t*c[2],i=y*w+x;if(z<=zbuf[i])continue;zbuf[i]=z;
   const grain=settings.texture?Math.sin((x+y/res)*39/res)*settings.texture*1.8:0;
   for(let k=0;k<3;k++)img.data[i*4+k]=s*a[k+3]+u*b[k+3]+t*c[k+3]+grain;img.data[i*4+3]=255;
  }
 }
 ctx.putImageData(img,0,0);
}
const unitScale=[1,1,1];
function view(id,{colors={},overlay='',yaw=0,scale=unitScale,lod=1,portrait=false}={},urgent=false){
 const key=JSON.stringify([id,overlay,colors,yaw,scale,lod,portrait]);let hit=atlas.get(key);
 if(hit){atlas.delete(key);atlas.set(key,hit);return hit;}
 if(!urgent&&clock()>deadline)return null;
 const mesh=makeMesh(id,overlay,colors,yaw,scale,lod),b=mesh.bounds,dx=b[3]-b[0],dy=b[4]-b[1];
 const res=Math.min(v.bakeUnit*v.aaScale[settings.aa]*(portrait?2:1),(v.surfaceMax-2*v.pad)/Math.max(dx,dy));
 const canvas=document.createElement('canvas');canvas.width=Math.ceil(dx*res)+2*v.pad;canvas.height=Math.ceil(dy*res)+2*v.pad;
 const origin=[b[0]-v.pad/res,b[1]-v.pad/res,b[2]-1],span=[canvas.width/res,canvas.height/res,b[5]-b[2]+2];
 if(gpu===undefined){try{gpu=initGPU();}catch{gpu=null;}}
 if(!gpu||!gpu(mesh,canvas,origin,span))raster(mesh,canvas,origin,res);
 hit={canvas,left:origin[0],top:origin[1],width:span[0],height:span[1]};atlas.set(key,hit);pixels+=canvas.width*canvas.height;
 while(atlas.size>v.cacheCount||pixels>v.cachePixels){const [k,old]=atlas.entries().next().value;pixels-=old.canvas.width*old.canvas.height;atlas.delete(k);}
 return hit;
}
function heroStyle(race,ch){return {colors:{skin:race.skin,hair:race.hair,cloth:ch.cloth,accent:ch.accent},overlay:race.overlay||''};}
function heroPortrait(raceId,classId){
 const key=raceId+'/'+classId;if(portraits.has(key))return portraits.get(key);
 const d=window.GAME_DB,r=d.races.find(r=>r.id===raceId),ch=d.classes.find(c=>c.id===classId);
 const {canvas}=view(ch.sprite,{...heroStyle(r,ch),lod:settings.lod,portrait:true},true);
 const html='<img class="clay-portrait" alt="" src="'+(canvas.toDataURL?.()||'')+'">';portraits.set(key,html);return html;
}
function configure(values={}){
 values=values||{};const next={...art.defaults};for(const [key,,levels] of art.settings)if(Number.isInteger(values[key])&&values[key]>=0&&values[key]<levels.length)next[key]=values[key];
 if(Object.keys(next).some(k=>next[k]!==settings[k])){settings=next;atlas.clear();portraits.clear();pixels=0;}
}
window.RPGModels={project,view,heroStyle,configure,settings:()=>settings,begin:()=>{deadline=clock()+v.budgetMs;},heroPortrait};
window.RPGArt={heroPortrait};
})();
