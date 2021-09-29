
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// questions for the user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'input',
        name: 'title',
        message: "Enter the project's title you beem working on",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['GNU', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the command to install dependencies',
        default: 'npm install --save',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter command to run tests',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any relevant usage infomation you might have',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any relevant contributing infomation you might have',
    }
];

// to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// to initialize the program
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        writeToFile("README.md", generateMarkdown({...res}));
    });
}

// calling the program 
init();
