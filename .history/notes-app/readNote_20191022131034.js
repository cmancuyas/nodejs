const loadNotes = require('./addNote');
const readNote = title => {
  const notes = loadNotes.loadNotes();

  const selectedNote = notes.find(note => {
    return note.title === title;
  });
};

module.exports = {
  readNote: readNote
};
