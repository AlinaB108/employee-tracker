const inquirer = require("inquirer");
// const mysql = require("mysql2");
const db = require('./db/connection');
const { viewDept, viewRoles, viewEmployees } =  require('./db/index');

// Starting the server
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
});

function init() {
  inquirer.prompt(
    {
      name: 'questions',
      type: 'list',
      loop: false,
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'Add a department',
        'View all roles',
        'Add a role',
        'View all employees',
        'Add an employee',
        'Update an employee role',
        'Quit'
      ]
    },
  )
  .then((answers) => {
    switch (answers.questions) {
      case 'View all departments':
        viewDept();
        setTimeout(init, 1000);
        break;
      // case 'Add a department':
      //   addDept();
      //   setTimeout(init, 1000);
      //   break;
      case "View all roles":
        viewRoles();
        setTimeout(init, 1000);
        break;
      // case "Add a role":
      //   addRole();
      //   break;
      case "View all employees":
        viewEmployees();
        setTimeout(init, 1000);
        break;
      // case "Add an employee":
      //   addEmployee();
      //   break;
      // case "Update an employee role":
      //   updateEmployee();
      //   break;
      // case "Quit":
      //   // connection.end();
      //   console.log("Goodbye!");
      //   break;
    }
  });
};

// Function call to initialize app (need to check how to slow it down)
// init();
setTimeout(init, 1000);


