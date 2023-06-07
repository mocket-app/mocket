import { Pool, QueryResult } from 'pg';

const PG_URI = 'postgres://qpicxefo:Xu4Udl4gSiReMkNoOzDtkhDAVsMHAmf4@mahmud.db.elephantsql.com/qpicxefo';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// This will be required in the controllers to be the access point to the database
const db = {
  query: (text: string, params: any[]) => {
    console.log('executed query', text);
    return pool.query(text, params);
  }
};

export default db.query;