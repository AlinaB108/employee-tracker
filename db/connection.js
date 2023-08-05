const mysql = require('mysql2')
require('dotenv').config();

// Connecting to SQL
const db = mysql.createConnection(
  // Using dotenv to hide a password
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = db;
