# SQL Employee Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
The employee tracker is a command-line application that allows users to view and manage employee data stored in a MySQL database. The application is built using Node.js to interact with the MySQL database and Inquirer.js to prompt the user for input.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
Clone the repository.
```
git clone git@github.com:AlinaB108/employee-tracker.git
```
Create package.json:
```
npm init -y
```
Install all dependencies from package.json:
```
npm i
```
The app uses dotenv (you need to use your own sql password)
```
npm i dotenv 
```

## Usage
[Recording of Application](https://watch.screencastify.com/v/vuvBPa0BbFjflOhedIH7)

- Start the server (in my repo it's index.js in a root folder).
```
node index.js
```
- You will be presented with a list of actions related to employees database. Use up and down arrows to navigate through the list.
- Press Enter to select one of the actions. Add a department/add a role/add an employee/Update an employee role require user's input.

Example of prompt questions:

![Screenshot](/assets/images/questions.png)

View all departments table

![Screenshot](/assets/images/table.png)

View all roles table

![Screenshot](/assets/images/table2.png)

## Contributing
1. Fork the project by clicking Fork in the top-right corner of the page.
2. Clone the repository.
3. Create a new branch to work on.
4. Commit the changes.
5. Push to the branch.
6. Create a pull request.

## Credits
Jeff McMillen - helped debugging the code

Ediubong Ekwere - helped a lot with ideas and code for .map() method

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

https://opensource.org/licenses/MIT 
    
## Questions
If you have any questions, send me a message [GitHub](https://github.com/AlinaB108) or send me an email: [alinachristabel108@gmail.com](alinachristabel108@gmail.com)