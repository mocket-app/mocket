"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const PG_URI = 'postgres://qpicxefo:Xu4Udl4gSiReMkNoOzDtkhDAVsMHAmf4@mahmud.db.elephantsql.com/qpicxefo';
// create a new pool here using the connection string above
const pool = new pg_1.Pool({
    connectionString: PG_URI
});
// This will be required in the controllers to be the access point to the database
const db = {
    query: (text, params) => {
        console.log('executed query', text);
        return pool.query(text, params);
    }
};
exports.default = db.query;
