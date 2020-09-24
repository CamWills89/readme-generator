// Initialize the file system and inquirer modules
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');
const Choice = require('inquirer/lib/objects/choice');

const promptUser = () => {

  return inquirer.prompt([{
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description for your project.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide some installation instructions for your project.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should this project be used? Provide screenshots as needed.'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'provide any credits you need, such as yourself, collaborators, third-party assets and/or tutorials you followed.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'please select a license.',
      choices: [
        "MIT",
        "Apache",
        "ISC",
        "GNU GPLv3 "
      ]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the rules for contributing to this project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What testing has been done on the project?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'what is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'what is your email address?'
    },
  ]).then(data => {
    const readMe = generateMarkdown(data);

    writeToFile(readMe)
  })
}

// function to write README file
function writeToFile(data) {

}

// function to initialize program
function init() {
  const data = promptUser()
}

// function call to initialize program
init();