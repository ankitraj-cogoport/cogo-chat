require('../helpers/init-env')();
const Pool = require('pg').Pool


const {
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DB_NAME,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DIALECT,
} = process.env;

const pool = new Pool({
    user: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB_NAME,
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    dialect: POSTGRES_DIALECT,
    dialectOptions: { bigNumberStrings: true }
});

module.exports = pool;
