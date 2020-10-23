const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {name: 'title',
    message: 'Project title: ',
    type: 'input'},

    {name: 'description',
    message: 'Project description: ',
    type: 'input'},

    {name: 'installation',
    message: 'Installation instructions: ',
    type: 'editor'},

    {name: 'usage',
    message: 'Usage instructions: ',
    type: 'input'},

    {name: 'license',
    message: 'Select license type: ',
    type: 'list',
    choices: ['MIT', 'Mozilla-Public-License', 'Apache']},

    {name: 'contributing',
    message: 'Instructions for contributing: ',
    type: 'input'},

    {name: 'tests',
    message: 'Instructions for testing: ',
    type: 'input'},

    {name: 'github',
    message: 'Github username: ',
    type: 'input'},    
    
    {name: 'repo',
    message: 'Respository name: ',
    type: 'input'},

    {name: 'email',
    message: 'Email: ',
    type: 'input'}
])
.then(answers => {
        console.log('Answers:', answers);
        // if user choses mozilla or apache need to get correct formatting for badge
        if (answers.license=="Apache 2.0"){
            answers.license = 'Apache%202.0';
        }
        if (answers.license == 'Mozilla-Public-License'){
            answers.license = 'MPL%202.0';
        }
        // variable to store ``` codeblock
        const codeBlock = "```";
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
${codeBlock} 
${answers.installation} 
${codeBlock}
## Usage
${(JSON.stringify(answers.usage).replace(/"/g, ""))}
## Licence
[![License](https://img.shields.io/badge/license-${(JSON.stringify(answers.license).replace(/"/g, ""))}-green)](https://github.com/${(JSON.stringify(answers.github).replace(/"/g, ""))}/${(JSON.stringify(answers.repo).replace(/"/g, ""))}/blob/main/LICENSE)
## Contributing
${(JSON.stringify(answers.contributing).replace(/"/g, ""))}
## Tests
${(JSON.stringify(answers.tests).replace(/"/g, ""))}
## Questions
[Github: ${(JSON.stringify(answers.github).replace(/"/g, "").trim())}](https://github.${(JSON.stringify(answers.github).replace(/"/g, "")).trim()})   
[Email: ${(JSON.stringify(answers.email).replace(/"/g, "")).trim()}](mailto:${(JSON.stringify(answers.email).replace(/"/g, "")).trim()})
    `, 'utf-8', function(){
        console.log('readme file created successfully!');
    })
    })
.catch(function(err){
console.log('there was an error '+ err);
});