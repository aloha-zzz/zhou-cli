#! /usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const talk = require('./../lib/talk')

console.log(chalk.green('hello '));

program
  .version('1.0.0', '-v, --version')

program
    .command('init')
    .alias('i')
    .description('创建新的项目')
    .action(() => {
        talk()
    })
  
program.parse(process.argv)

