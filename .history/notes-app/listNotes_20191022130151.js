const loadNotes = require('./addNote');
const chalk = require('chalk');
const listNotes = () => loadNotes.loadNotes();

const notes = listNotes();

const colorNotes = notes.forEach(note => {
  if (note) console.log(chalk.blue(note.title) + ' ' + chalk.red(note.body));
  else {
    console.log('Unable to find note');
  }
});

module.exports = {
  listNotes: listNotes
};
