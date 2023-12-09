import pkg from 'pg'

const {Pool} = pkg

import dotenv from "dotenv";

dotenv.config();

const poolConfig = {
  user: "postgres",
  host: "localhost",
  database: "students",
  password: process.env.PG_PASS,
  port: 5432,
};

const pool = new Pool(poolConfig)


export default pool