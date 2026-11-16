/* Deterministic Worker build. game-db.js and rpg-engine.js remain the only sources. */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=__dirname,read=name=>fs.readFileSync(path.join(root,name),'utf8'),out=path.join(root,'cloudflare','generated');
fs.mkdirSync(out,{recursive:true});fs.mkdirSync(path.join(root,'dist','client'),{recursive:true});
let html=read('rpg-shell.html');
for(const [token,name]of Object.entries({__CSS__:'rpg.css',__ENGINE__:'rpg-engine.js',__RENDERER__:'rpg-renderer.js',__AUDIO__:'rpg-audio.js',__ONLINE__:'rpg-online.js',__NETCODE__:'rpg-netcode.js',__UI__:'rpg-ui.js'}))html=html.replace(token,read(name));
if(/__[A-Z_]+__/.test(html))throw Error('Unresolved HTML source token');
fs.writeFileSync(path.join(root,'index.html'),html);
fs.writeFileSync(path.join(root,'dist','client','index.html'),html);
fs.copyFileSync(path.join(root,'game-db.js'),path.join(root,'dist','client','game-db.js'));
const database=read('game-db.js'),json=database.slice(database.indexOf('{'),database.lastIndexOf('}')+1);
const engine=read('rpg-engine.js').replace('(() => {','function createEngine(database) { const window={GAME_DB:database};').replace(/\}\)\(\);\s*$/,'return window.RPG; }');
fs.writeFileSync(path.join(out,'runtime.cjs'),"'use strict';\nconst DB="+json+';\n'+engine+'\nmodule.exports={DB,createEngine:()=>createEngine(DB)};\n');
for(const file of ['world.cjs','social.cjs'])fs.writeFileSync(path.join(out,file),read('server/'+file).replace("require('./engine.cjs')","require('./runtime.cjs')"));
console.log('Built shared RPG runtime, Worker assets and static HTML.');
