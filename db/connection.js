const mysql = require('mysql2')
require('dotenv').config();

// Connecting to SQL
const db = mysql.createConnection(
  // Using dotenv to hide a password
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log('Connected to database')
);
module.exports = db;

