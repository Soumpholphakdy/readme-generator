// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project name.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log("Please enter a description of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log(
          "Please enter the installation instructions for your project."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is the usage information for your project?",
    name: "usage",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log("Please enter the usage information for your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What are the contribution guidelines for your project?",
    name: "contribution",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log(
          "Please enter the contribution guidelines for your project."
        );
        return false;
      }
    },
  },
  
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GPL 3.0",
      "BSD 3-Clause",
      "None",
    ],
    validate: valid => {
        if (valid){
            return true;
        }else{
            console.log("Please choose one of the options for license")
            return false;
        }
    }
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log("Please enter your email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: (aboutInput) => {
      if (aboutInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username.");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize
init();