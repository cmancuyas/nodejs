const loadNotes = require('./addNote');
const chalk = require('chalk');
const listNotes = () => loadNotes.loadNotes();

const notes = listNotes();

const colorNotes = notes.forEach(note => {
  console.log(chalk.blue(note.title) + ' ' + chalk.red(note.body));
});

module.exports = {
  listNotes: listNotes
};
