const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

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
        name:'installation',
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
        message:'Anyone you want to credit?'
    },
    {
        type: 'input',
        name:'features',
        message:'Are there any features you would like to include?'
    },
    {
        type: 'input',
        name:'contributions',
        message:'How can people contribute to your project?'
    },
    {
        type: 'input',
        name:'tests',
        message:'Any tests you want to include?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices:['MIT','ISC','GNUPLV3']
    }
];

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log(`${filename} file generated successfully!`);
    });
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.log(error);
        });
}

init()





