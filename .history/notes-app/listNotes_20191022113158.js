const loadNotes = require('./addNote');
const chalk = require('chalk');
const listNotes = () => loadNotes.loadNotes();

const notes = listNotes();

const colorNotes = notes.filter(note => {
  console.log(chalk.blue(note.title));
  console.log(chalk.red(note.body));
});

module.exports = {
  colorNotes: listNotes
};
