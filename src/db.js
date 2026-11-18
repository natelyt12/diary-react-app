import Dexie from "dexie";
export const db = new Dexie("JournalDB");
db.version(1).stores({ content: "id, title, desc" });
