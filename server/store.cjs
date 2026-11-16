'use strict';
const {DatabaseSync}=require('node:sqlite');
const fs=require('node:fs'),path=require('node:path');

class Store {
 constructor(filename){
  if(filename!==':memory:')fs.mkdirSync(path.dirname(path.resolve(filename)),{recursive:true});
  this.db=new DatabaseSync(filename);
  this.db.exec('PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000;');
  this.db.exec(`CREATE TABLE IF NOT EXISTS accounts(id TEXT PRIMARY KEY, username TEXT UNIQUE NOT NULL, salt TEXT NOT NULL, password TEXT NOT NULL, created INTEGER NOT NULL);
   CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, account TEXT NOT NULL REFERENCES accounts(id), expires INTEGER NOT NULL);
   CREATE TABLE IF NOT EXISTS characters(account TEXT PRIMARY KEY REFERENCES accounts(id), state TEXT NOT NULL, profile TEXT NOT NULL, updated INTEGER NOT NULL);
   CREATE TABLE IF NOT EXISTS social(id INTEGER PRIMARY KEY CHECK(id=1), data TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS rooms(id TEXT PRIMARY KEY, data TEXT NOT NULL, updated INTEGER NOT NULL);`);
 }
 transaction(fn){this.db.exec('BEGIN IMMEDIATE');try{const result=fn();this.db.exec('COMMIT');return result;}catch(error){this.db.exec('ROLLBACK');throw error;}}
 account(username){return this.db.prepare('SELECT * FROM accounts WHERE username=?').get(username);}
 addAccount(value){this.db.prepare('INSERT INTO accounts VALUES(?,?,?,?,?)').run(value.id,value.username,value.salt,value.password,value.created);}
 session(token,now){return this.db.prepare('SELECT account FROM sessions WHERE token=? AND expires>?').get(token,now)?.account;}
 deleteAccountSessions(account){this.db.prepare('DELETE FROM sessions WHERE account=?').run(account);}
 addSession(token,account,expires){this.db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(token,account,expires);}
 deleteSession(token){this.db.prepare('DELETE FROM sessions WHERE token=?').run(token);}
 character(id){const row=this.db.prepare('SELECT * FROM characters WHERE account=?').get(id);return row?{state:JSON.parse(row.state),profile:JSON.parse(row.profile)}:null;}
 saveCharacter(id,state,profile,now){this.db.prepare('INSERT INTO characters VALUES(?,?,?,?) ON CONFLICT(account) DO UPDATE SET state=excluded.state,profile=excluded.profile,updated=excluded.updated').run(id,JSON.stringify(state),JSON.stringify(profile),now);}
 social(){const row=this.db.prepare('SELECT data FROM social WHERE id=1').get();return row?JSON.parse(row.data):null;}
 saveSocial(value){this.db.prepare('INSERT INTO social VALUES(1,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data').run(JSON.stringify(value));}
 findRoom(mapId,enemyId){if(!enemyId)return null;return this.db.prepare("SELECT id FROM rooms WHERE json_extract(data,'$.instance.enemies[0].id')=? AND id LIKE ? ORDER BY updated DESC LIMIT 1").get(enemyId,'%|'+mapId);}
 room(id){const row=this.db.prepare('SELECT data FROM rooms WHERE id=?').get(id);return row?JSON.parse(row.data):null;}
 saveRoom(id,data,now){this.db.prepare('INSERT INTO rooms VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data,updated=excluded.updated').run(id,JSON.stringify(data),now);}
 ranking(limit){return this.db.prepare("SELECT account,profile,state FROM characters ORDER BY CAST(json_extract(profile,'$.rating') AS INTEGER) DESC LIMIT ?").all(limit);}
 close(){this.db.close();}
}
module.exports={Store};
