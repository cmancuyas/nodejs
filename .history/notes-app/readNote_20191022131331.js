const loadNotes = require('./addNote');
const chalk = require('chalk');
const readNote = title => {
  const notes = loadNotes.loadNotes();

  const selectedNote = notes.find(note => {
    return note.title === title;
  });

  if (note) {
    console.log(chalk.inverse(selectedNote.title));
    console.log(selectedNote.body);
  } else {
    console.log('Unable to find note');
  }
};

module.exports = {
  readNote: readNote
};
