const child_process = require('child_process');
const chalk = require('chalk');
const fileMap = require('./fileMap');

module.exports = (type) => {
    console.log(chalk.green('start clone'))
    child_process.exec(`git clone ${fileMap[type]}`, (err, stdout, stderr) => {
        if (err) {
            console.log(chalk.red('Err: ' + err));
            return;
        } 
        console.log(chalk.green('init success'))
    })
}