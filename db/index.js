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

function viewRoles() {
  db.query(`SELECT department.id AS Id, roles.title AS Title, department.dept_name AS Dept, roles.salary AS Salary
  FROM roles
  JOIN department ON roles.department_id = department.id;`, function (err, res) {
    if (err) {
      console.log(err);
    }else {
      console.table(res);
    }
  });
}

function viewEmployees() {
  db.query(`SELECT employee.id AS ID, employee.first_name AS First_name, employee.last_name AS Last_name,
  roles.title AS Title, roles.salary AS Salary, department.dept_name AS Dept_name,
  CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
FROM employee
LEFT JOIN roles ON employee.role_id = roles.id
LEFT JOIN department ON roles.department_id = department.id
LEFT JOIN employee manager ON employee.manager_id = manager.id AND CASE WHEN employee.id != manager.id THEN true ELSE false END`, function (err, res) {
    if (err) {
      console.log(err);
    }else {
      console.table(res);
    }
  });
}

module.exports = { viewDept, viewRoles, viewEmployees }