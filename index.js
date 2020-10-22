const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([{
    name: 'title',
    message: 'Project title: ',
    type: 'input'},

    {name: 'description',
    message: 'Project description: ',
    type: 'input'},

    {name: 'installation',
    message: 'Installation instructions: ',
    type: 'input'},

    {name: 'usage',
    message: 'Usage instructions: ',
    type: 'input'},

    {name: 'licence',
    message: 'Select licence type: ',
    type: 'list',
    choices: ['MIT', 'APACHE', 'GNU']},

    {name: 'contributing',
    message: 'Instructions for contributing: ',
    type: 'input'},

    {name: 'tests',
    message: 'Instructions for testing: ',
    type: 'input'},

    {name: 'github',
    message: 'Github username: ',
    type: 'input'},

    {name: 'email',
    message: 'Email: ',
    type: 'input'}
])
.then(answers => {
        console.log('Answers:', answers);
        fs.writeFile('readme.md', 

`# ${(JSON.stringify(answers.title).replace(/"/g, ""))}
## Description
${(JSON.stringify(answers.description).replace(/"/g, ""))}
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Licence](#Licence)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation
${(JSON.stringify(answers.installation).replace(/"/g, ""))}
## Usage
${(JSON.stringify(answers.usage).replace(/"/g, ""))}
## Licence
[![${(JSON.stringify(answers.licence).replace(/"/g, ""))} License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
## Contributing
[![GitHub contributors](https://img.shields.io/github/contributors/cdnjs/cdnjs.svg?style=flat)]()  
${(JSON.stringify(answers.contributing).replace(/"/g, ""))}
## Tests
${(JSON.stringify(answers.tests).replace(/"/g, ""))}
## Questions
${(JSON.stringify(answers.github).replace(/"/g, ""))}
[![GitHub followers](https://img.shields.io/github/followers/tterb.svg?style=social&label=Follow)](https://github.com/${(JSON.stringify(answers.github).replace(/"/g, ""))}/MyBadges)
${(JSON.stringify(answers.email).replace(/"/g, ""))}
    `, 'utf-8', function(){
        console.log('readme file created successfully!');
    })
    })
.catch(function(err){
console.log('there was an error'+ err);
});