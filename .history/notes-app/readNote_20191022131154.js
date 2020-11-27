const loadNotes = require('./addNote');
const readNote = title => {
  const notes = loadNotes.loadNotes();

  const selectedNote = notes.find(note => {
    return note.title === title;
  });

  if (note) {
    console.log(selectedNote);
  } else {
    console.log('Unable to find note');
  }
};

module.exports = {
  readNote: readNote
};
