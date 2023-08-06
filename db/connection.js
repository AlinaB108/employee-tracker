const mysql = require('mysql2')
// require('dotenv').config();
// // Connecting to SQL
// const db = mysql.createConnection(
//   // Using dotenv to hide a password
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   }
// );
// module.exports = db;
// Need to work on that later

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'krasnoyarsk030522',
  database: 'employee_db'
});

module.exports = db;


