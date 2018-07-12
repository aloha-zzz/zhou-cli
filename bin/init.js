#! /usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const { select } = require('./../lib/talk')

console.log(chalk.green('Cli start'));
program
  .version(require('../package').version, '-v, --version')

program
    .command('init')
    .alias('i')
    .description('创建新的项目')
    .action(() => {
        select()
    })
  
program.parse(process.argv)

