# Readme Generator
## Description
A markdown readme generator that uses npm and the command line to get information from the user and add it to a professionally styled readme markdown file. 
[video demonstration](https://drive.google.com/file/d/1xna40Aqq5R53PJDqKDzqThxO8csMOXuH/view)
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Features](#Features)
* [License](#License)
* [Questions](#Questions)
## Installation
``` 
npm install
npm install inquirer
npm install fs 
node index.js
```
## Features
It uses inquirer npm to prompt the user for information and fs npm to generate the markdown file.  

The generated readme features an interactive table of contents that will take the user to the corresponding section when clicked.

The installation section prompt has a type of edit which opens the users default .txt editor, this allows the user to have more control over the input and is useful when the user wants to start a new line without triggering the next prompt. The generated output for this section uses a code markup as installation guides often involve steps to follow in the command line.

The License in the readme uses a badge that corresponds to the license chosen by the user from a list of options. Some of the options needed to be converted to a different format before being added to the url to fetch the badge. For example "Apache 2.0" needed to be converted to "Apache%202.0" as the url does not accept spaces.
When the license badge is clicked it takes the user to the license page for the github repo (which is why the user is also asked for the repo name as well as their github username).

In the Questions section when the user clicks the github link it takes them to the users github page.
When the user clicks the email it triggers a mailto window to open.


## License
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/nick75mowbray/readme_generator/blob/main/LICENSE)

## Questions
[Github: nick75mowbray](https://github.com/nick75mowbray)   
[Email: nick75mowbray@gmail.com](mailto:nick75mowbray@gmail.com)
    