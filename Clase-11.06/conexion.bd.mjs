import {Pool} from 'pg';

const pool = new Pool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_PORT,
    port: 5432,
})

export default pool