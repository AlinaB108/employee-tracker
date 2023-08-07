// Connecting to a file where we have db
const db = require('./connection');
const inquirer = require("inquirer");

// View department function
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

// View roles function
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

// View employees function
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

// Add a department function
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


// Add employee function
function addRole(init) {
  db.query(`SELECT * FROM department`, function (err, res) {
    const roleArray = res.map(({ dept_name, id }) => ({ 'name': dept_name, 'value': id }))
    let questions = [
      {
        type: 'input',
        name: 'title',
        message: 'Enter a role name:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary of the role:',
      },
      {
        type: 'list',
        name: 'department',
        message: 'Select a department that this role belongs to:',
        choices: roleArray
      }
    ]
    inquirer.prompt(questions)
      .then(function (answers) {
        db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [answers.title, answers.salary, answers.department], (err, results) => {
          console.log(`${answers.title} has been added to the roles table.`);
          init();
        });
      })
  });
}


module.exports = { viewDept, viewRoles, viewEmployees, addDept, addRole }