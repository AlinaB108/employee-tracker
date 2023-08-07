const inquirer = require("inquirer");
const db = require('./db/connection');
const { viewDept, viewRoles, viewEmployees, addDept, addRole, addEmployee, updateEmployee } =  require('./db/index');

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
        viewDept(init);
        break;
      case 'Add a department':
        addDept(init);
        break;
      case "View all roles":
        viewRoles(init);
        break;
      case "Add a role":
        addRole(init);
        break;
      case "View all employees":
        viewEmployees(init);
        break;
      case "Add an employee":
        addEmployee(init);
        break;
      case "Update an employee role":
        updateEmployee(init);
        break;
      case "Quit":
        db.end();
        console.log("Goodbye!");
        break;
    }
  });
};

// Function call to initialize app
init();
