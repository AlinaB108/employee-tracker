// Connecting to a file where we have db
const db = require('./connection');
const inquirer = require("inquirer");

function viewDept(init) {
  db.query(`SELECT * FROM department`, function (err, res) {
    if (err) {
      console.log(err);
    }else {
      console.table(res);
    }
    init();
  });
}

function viewRoles(init) {
  db.query(`SELECT department.id AS Id, roles.title AS Title, department.dept_name AS Dept, roles.salary AS Salary
  FROM roles
  JOIN department ON roles.department_id = department.id;`, function (err, res) {
    if (err) {
      console.log(err);
    }else {
      console.table(res);
    }
    init();
  });
}

function viewEmployees(init) {
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
    init();
  });
}

function addDept(init) {
  let questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department you want to add'
    }
  ]

  inquirer.prompt(questions)
    .then((answer) => {
      db.query(`INSERT INTO department (dept_name) VALUES (?)`, [answer.name], (err, res) => {
        if (err) throw err;
        console.log(`${answer.name} is added successfully! at id ${res.insertId}`);
        init();
      });
    });
};

module.exports = { viewDept, viewRoles, viewEmployees, addDept }