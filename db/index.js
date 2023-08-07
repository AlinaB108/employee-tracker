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

// Add a role function
function addRole(init) {
  db.query(`SELECT * FROM department`, function (err, res) {
    const roleArray = res.map(({ dept_name, id }) => ({ 'name': dept_name, 'value': id }))
    let questions = [
      {
        type: 'input',
        name: 'title',
        message: 'Enter a role name',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary for the role',
      },
      {
        type: 'list',
        name: 'department',
        message: 'Select a department that this role belongs to',
        choices: roleArray
      }
    ]
    inquirer.prompt(questions)
      .then(function (answers) {
        db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [answers.title, answers.salary, answers.department], (err, results) => {
          console.log(`${answers.title} is added successfully!`);
          init();
        });
      })
  });
}

// Add an employee function
function addEmployee(init) {
  db.query('SELECT * FROM roles', function (err, res) {
    const roleArray = res.map(({ title, id }) => ({ 'name': title, 'value': id }))
    if (err) throw err;

  db.query('SELECT * FROM employee', function (err, res) {
    const managerArray = res.map(({ first_name, last_name, id }) => ({ 'name': first_name + " " + last_name, 'value': id }))
    managerArray.push('null')
    if (err) throw err;
    let questions = [
      {
        type: 'input',
        name: 'first_name',
        message: `Enter the employee's first name:`,
      },
      {
        type: 'input',
        name: 'last_name',
        message: `Enter the employee's last name:`,
      },
      {
        type: 'list',
        name: 'role',
        message: `Select the employee's role`,
        choices: roleArray
      },
      {
        type: 'list',
        name: 'manager',
        message: `Select the manager`,
        choices: managerArray
      }
    ]
    inquirer.prompt(questions)
      .then(function (answers) {
        if (answers.manager === 'null'){
            answers.manager = null;
          }
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.first_name, answers.last_name, answers.role, answers.manager], (err, results) => {
          if (err) throw err;
          console.log(`${answers.first_name} ${answers.last_name} is added successfully!`);
          init();
        });
      })
    });
  });
}

// Update an employee role function
function updateEmployee(init) {
  db.query('SELECT * FROM roles', function (err, results) {
    const roleArrray = results.map(({ title, id }) => ({ 'name': title, 'value': id }))
    if (err) throw err;

  db.query('SELECT * FROM employee', function (err, results) {
    const employeeArrray = results.map(({ first_name, last_name, id }) => ({ 'name': first_name + " " + last_name, 'value': id }))
    const managerArray = results.map(({ first_name, last_name, id }) => ({ 'name': first_name + " " + last_name, 'value': id }))
      managerArray.push('null')
      if (err) throw err;
      let questions = [
        {
          type: 'list',
          name: 'employee',
          message: `Select the employee whose information you would like to update`,
          choices: employeeArrray,
        },
        {
          type: 'list',
          name: 'role',
          message: `Select the employee's new role`,
          choices: roleArrray
        },
        {
          type: 'list',
          name: 'change',
          message: `Would you like to change the employee's manager?`,
          choices: ['Yes', 'No']
        },
        {
          type: 'list',
          name: 'manager',
          message: `Select a new manager for the employee`,
          choices: managerArray,
          when: (answers) => answers.change === 'Yes'
        },
      ]
      inquirer.prompt(questions)
        .then(function (answers) {
          if (answers.change === 'No'){
            db.query('UPDATE employee SET role_id = ? WHERE id = ?', [answers.role, answers.employee], (err, res) => {
              console.log(`Employee's ID ${answers.employee} updated successfully`);
              return init();
            });
          } 

          if (answers.change ==='Yes') {
            if (answers.manager === 'null'){
              answers.manager = null;
            }
            db.query('UPDATE employee SET role_id = ?, manager_id = ? WHERE id = ?', [answers.role, answers.manager, answers.employee], (err, res) => {
              if (err) throw err;
              console.log(`Employee's ID ${answers.employee} updated successfully`);
              init();
            });
          }
        })
    });
  });
}

module.exports = { viewDept, viewRoles, viewEmployees, addDept, addRole, addEmployee, updateEmployee }