// Connecting to a file where we have db
const db = require('./connection');

function viewDept() {
  db.query(`SELECT * FROM department`, function (err, res) {
    if (err) {
      console.log(err);
    }else {
      console.table(res);
    }
  });
}

module.exports = { viewDept }