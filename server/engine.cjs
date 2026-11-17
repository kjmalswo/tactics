'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const databaseSource=fs.readFileSync(path.join(root,'game-db.js'),'utf8');
const DB=JSON.parse(databaseSource.slice(databaseSource.indexOf('{'),databaseSource.lastIndexOf('}')+1));
const growth=new vm.Script(fs.readFileSync(path.join(root,'rpg-growth.js'),'utf8'),{filename:'rpg-growth.js'});
const compiled=new vm.Script(fs.readFileSync(path.join(root,'rpg-engine.js'),'utf8'),{filename:'rpg-engine.js'});
function createEngine(){const context=vm.createContext({window:{GAME_DB:DB}});growth.runInContext(context);compiled.runInContext(context);return context.window.RPG;}
module.exports={DB,createEngine,root};
