// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./generatorMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "what is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "what is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "what is the installtion instruction for your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide a description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "How Can I use this application?",
        name: "usage"
    },
    {
        type: "list",
        message: "What license do you choose for this project?",
        name: "license",
        choices: ["APACHE", "MIT"]
    },
    {
        type: "input",
        message: "Please add contributors",
        name: "contributor"
    },
    {
        type: "input",
        message: "What command do you use to test this App?",
        name: "test"
    }
];


// TODO: Create a function to write README file instructions
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
          console.log("Start writing a README.md file...")
          if (err) {
            return console.log(err);
          } else {
            console.log("successfully wrote: " + fileName);
          }
          
        })     
}


/* TODO: Create a function to initialize app 
this function is reading the readme file*/

function init () {
    inquirer.prompt(questions)
    .then((inquirerResponse) => { 
        const newReadme = markdown(inquirerResponse)
        writeToFile("README.md", newReadme);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app axios is like the fetch request
init();



