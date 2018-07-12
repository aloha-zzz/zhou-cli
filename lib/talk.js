const inquirer = require('inquirer');
const cloneCode = require('./code');
const fileMap = require('./fileMap');

const select = () => {
    return inquirer.prompt([{
        type: 'list',
        message: 'Please select the template you need:',
        name: 'template',
        choices: Object.keys(fileMap)
    }]).then(function (answers) {
        console.log(answers.template)
        cloneCode(answers.template)
    })
}

// const isDelete = () => {

// }

module.exports = {
    select,
}