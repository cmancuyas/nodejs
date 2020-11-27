const fs = require('fs');
const yargs = require('yargs');
const getNotes = require('./notes');
const addNote = require('./addNote');
const deleteNote = require('./deleteNote');
const listNotes = require('./listNotes');
// fs.writeFileSync('notes.txt', 'My name is Kobe');
// fs.appendFileSync('notes.txt', '\nPogi Kobe');
// const sum = require('./utils');

// console.log(sum(2, 23));
// const validator = require('validator');
// const getNotes = require('./notes');
// const msg = getNotes();
// console.log(msg);

// console.log(validator.isEmail('kobe.mancuyas@gmail.com'));
// console.log(validator.isURL('https://www.google.com'));

// const chalk = require('chalk');
// const log = console.log;

// log(chalk.blue('Loggin on to ' + chalk.yellow('server')));
// log(chalk.green('Success'));
// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.inverse.bold('Hello world!'));

// console.log(process.argv[2]);

// const command = process.argv[2];
// if (command === 'add') {
//   fs.writeFileSync('notes.txt', 'Pogi si Kobe1');
// } else if (command === 'remove') {
//   console.log('Removing note');
// }

// console.log(process.argv);
// console.log(yargs.argv);

// //Customize yargs
// yargs.version('1.1.0');
// console.log(yargs.argv);

yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'add user',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Add Body',
      demandOption: true,
      type: String
    }
  },
  handler(argv) {
    // console.log('Title: ', argv.title);
    // console.log('Body: ', argv.body);
    addNote.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'delete note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    deleteNote.deleteNote(argv.title);
    console.log('Removing the note');
  }
});

yargs.command({
  command: 'list',
  describe: 'list all notes',
  builder: {
    title: {
      describe: 'List all notes',
      demandOption: true,
      type: String
    }
  },
  handler() {
    listNotes.listNotes();
    console.log('Listing all notes');
  }
});

yargs.command({
  command: 'read',
  describe: 'read all commands',
  handler() {
    console.log('Reading all commands');
  }
});

console.log(yargs.argv);
