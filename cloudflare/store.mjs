/* The same relational contract as the Node adapter, backed by Durable Object SQLite. */
export class CloudStore {
 constructor(storage){
  this.storage=storage;this.sql=storage.sql;
  for(const sql of [
   'CREATE TABLE IF NOT EXISTS accounts(id TEXT PRIMARY KEY, username TEXT UNIQUE NOT NULL, salt TEXT NOT NULL, password TEXT NOT NULL, created INTEGER NOT NULL)',
   'CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, account TEXT NOT NULL REFERENCES accounts(id), expires INTEGER NOT NULL)',
   'CREATE TABLE IF NOT EXISTS characters(account TEXT PRIMARY KEY REFERENCES accounts(id), state TEXT NOT NULL, profile TEXT NOT NULL, updated INTEGER NOT NULL)',
   'CREATE TABLE IF NOT EXISTS social(id INTEGER PRIMARY KEY CHECK(id=1), data TEXT NOT NULL)',
   'CREATE TABLE IF NOT EXISTS rooms(id TEXT PRIMARY KEY, data TEXT NOT NULL, updated INTEGER NOT NULL)'
  ])this.sql.exec(sql);
 }
 one(sql,...args){return this.sql.exec(sql,...args).toArray()[0];}
 transaction(fn){return this.storage.transactionSync(fn);}
 account(username){return this.one('SELECT * FROM accounts WHERE username=?',username);}
 addAccount(v){this.sql.exec('INSERT INTO accounts VALUES(?,?,?,?,?)',v.id,v.username,v.salt,v.password,v.created);}
 session(token,now){return this.one('SELECT account FROM sessions WHERE token=? AND expires>?',token,now)?.account;}
 addSession(token,account,expires){this.sql.exec('INSERT INTO sessions VALUES(?,?,?)',token,account,expires);}
 deleteSession(token){this.sql.exec('DELETE FROM sessions WHERE token=?',token);}
 deleteAccountSessions(account){this.sql.exec('DELETE FROM sessions WHERE account=?',account);}
 character(id){const row=this.one('SELECT state,profile FROM characters WHERE account=?',id);return row?{state:JSON.parse(row.state),profile:JSON.parse(row.profile)}:null;}
 saveCharacter(id,state,profile,now){this.sql.exec('INSERT INTO characters VALUES(?,?,?,?) ON CONFLICT(account) DO UPDATE SET state=excluded.state,profile=excluded.profile,updated=excluded.updated',id,JSON.stringify(state),JSON.stringify(profile),now);}
 social(){const row=this.one('SELECT data FROM social WHERE id=1');return row?JSON.parse(row.data):null;}
 saveSocial(value){this.sql.exec('INSERT INTO social VALUES(1,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data',JSON.stringify(value));}
 findRoom(mapId,enemyId){if(!enemyId)return null;return this.one("SELECT id FROM rooms WHERE json_extract(data,'$.instance.enemies[0].id')=? AND id LIKE ? ORDER BY updated DESC LIMIT 1",enemyId,'%|'+mapId);}
 room(id){const row=this.one('SELECT data FROM rooms WHERE id=?',id);return row?JSON.parse(row.data):null;}
 saveRoom(id,data,now){this.sql.exec('INSERT INTO rooms VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data,updated=excluded.updated',id,JSON.stringify(data),now);}
 roomUsed(id){return !!this.one("SELECT 1 FROM characters WHERE json_extract(profile,'$.location.key')=? LIMIT 1",id);}
 deleteRoom(id){this.sql.exec('DELETE FROM rooms WHERE id=?',id);}
 ranking(limit){return this.sql.exec("SELECT account,profile,state FROM characters ORDER BY CAST(json_extract(profile,'$.rating') AS INTEGER) DESC LIMIT ?",limit).toArray();}
}
