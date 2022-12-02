require('dotenv').config()

const { Pool } = require('pg')

const config = {
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
};

const pool = new Pool(config);

async function execute(sql, values, all_records) {
    try {
        const client = await pool.connect();
        const res = await client.query(sql, values);
        client.release()

        if (all_records) {
            return res.rows;
        } else {
            return res.rows[0];
        };
    } catch (err) {
        console.warn(err.stack);
        add_log('error', 'sql: ' + sql, null);
        add_log('error', 'execute: ' + err.stack, null);
        return null;
    }
}

async function set_test(id,name)
{
    let sql = `insert into public.test ("id","name") values ($1,$2)`;
    const values = [id,name];
    return execute(sql, values, true);
}

async function get_login()
{
    let sql = `SELECT "Email", "Password", id
	FROM public.sys_users;`;
    const values = [];
    return execute(sql, values, true);
}

module.exports = {
    execute,
    set_test,
    get_login
}