const fs = require('fs');
const yargs = require('yargs');
// fs.writeFileSync('notes.txt', 'My name is Kobe');
// fs.appendFileSync('notes.txt', '\nPogi Kobe');
// const sum = require('./utils');

// console.log(sum(2, 23));
const validator = require('validator');
const getNotes = require('./notes');
const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('kobe.mancuyas@gmail.com'));
console.log(validator.isURL('https://www.google.com'));

const chalk = require('chalk');
const log = console.log;

log(chalk.blue('Loggin on to ' + chalk.yellow('server')));
log(chalk.green('Success'));
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.inverse.bold('Hello world!'));

console.log(process.argv[2]);

const command = process.argv[2];
if (command === 'add') {
  fs.writeFileSync('notes.txt', 'Pogi si Kobe1');
} else if (command === 'remove') {
  console.log('Removing note');
}

console.log(process.argv);
console.log(yargs.argv);

//Customize yargs
yargs.version('14.4.2');
console.log(yargs.argv);
