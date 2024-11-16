import { Database } from "bun:sqlite";

const db = new Database('mydb.sqlite');
const query = db.query("select 'Hello world' as message;");
console.log(query.get())