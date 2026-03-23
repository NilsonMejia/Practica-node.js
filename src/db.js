import pkg from 'pg';

import detonev from 'dotenv';

detonev.config();

const {Pool} = pkg;


export const pool = new Pool({
user: process.env.DB_USER,
host: process.env.DB_HOST,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
port: process.env.DB_PORT
});


