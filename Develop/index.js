// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name:'title',
        message:'What is the name of your project?'
    },
    {
        type: 'input',
        name:'description',
        message:'What is the reason for your project, what are the who, why, what?'
    },
    {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'Select the sections you want to include in the table of contents:',
        choices: [
          {
            name: 'Installation',
            value: 'installation'
          },
          {
            name: 'Usage',
            value: 'usage'
          },
          {
            name: 'Credits',
            value: 'credits'
          },
          {
            name: 'License',
            value: 'license'
          },
         {
            name: 'Features',
            value: 'features'
         },
         {
            name:'How-to-contribute',
            value: 'how to contribute'
         },
         {
            name:'Test',
            value:'test'
         }

        ]
    },
    {
        type: 'input',
        name:'Installation',
        message:'Is there any installation required?'
    },
    {
        type: 'input',
        name:'usages',
        message:'How will someone use your project?'
    },
    {
        type: 'input',
        name:'credits',
        message:'anyone you want to credit?'
    },
    {
        type: 'input',
        name:'Features',
        message:'Is their any features you would like include?'
    },
    {
        type: 'input',
        name:'Contributions',
        message:'how can people contribute to your project?'
    },
    {
        type: 'input',
        name:'Tests',
        message:'Any tests you wanna include'
    },
    {
        type: 'list',
        name: 'License',
        choices:['MIT','ISC','GNUPLV3',]
    }
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) throw err;
        console.log('README.md file generated successfully!');
      });
      
    inquirer.prompt(questions)
    .then((answers) => {
        const {title, description, tableOfContents, Installations, usage, credits, Features, Contributions, Tests, License } = answers
        const data = `title: ${title}\ndescription: ${description}\ntableOfContents: ${tableOfContents}\nInstallations: ${Installations}\nusage: ${usage}\ncredits: ${credits}\nFeatures: ${Features}\nContributions: ${Contributions}\nTests: ${Tests}\nLicense: ${License}`;
      writeToFile('README.md', data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
      });
}

// Function call to initialize app
init();








