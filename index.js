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
    choices: ['alligator', 'crocodile']},

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

`#${(JSON.stringify(answers.title).replace(/"/g, ""))}
##Description
${(JSON.stringify(answers.description).replace(/"/g, ""))}
##Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Licence](#Licence)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
##Installation
${(JSON.stringify(answers.installation).replace(/"/g, ""))}
##Usage
${(JSON.stringify(answers.usage).replace(/"/g, ""))}
##Licence
${(JSON.stringify(answers.licence).replace(/"/g, ""))}
##Contributing
${(JSON.stringify(answers.contributing).replace(/"/g, ""))}
##Tests
${(JSON.stringify(answers.tests).replace(/"/g, ""))}
##Questions
${(JSON.stringify(answers.github).replace(/"/g, ""))}
    `, 'utf-8', function(){
        console.log('readme file created successfully!');
    })
    })
.catch(function(err){
console.log('there was an error'+ err);
});