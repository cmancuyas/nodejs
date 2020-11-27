const fs = require('fs');
const chalk = require('chalk');
const loadNotes = require('./addNote');
const deleteNote = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });

  console.log(notesToKeep);

  if (notes.length > notesToKeep.length) {
    fsSaveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note has been deleted'));
  } else {
    console.log(chalk.green('Note does not exist'));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {}
};

const fsSaveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  deleteNote: deleteNote
};
