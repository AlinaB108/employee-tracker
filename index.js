const inquirer = require("inquirer");
const mysql = require("mysql2");
//  might not need the express??
const express = require('express');
const db = require('./db/connection');

// Inquirer will be here
const questions = {
  name: 'questions',
  type: 'list',
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
}

function init() {
  inquirer.prompt(questions)
  // 
};

// Function call to initialize app
init();