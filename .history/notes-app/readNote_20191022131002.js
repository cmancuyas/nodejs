const loadNotes = require('./addNote');
const readNote = title => {
  const notes = loadNotes.loadNotes();

  const selectedNote = notes.find(note => {
    return note.title === title;
  });
  console.log(selectedNote);
};

module.exports = {
  readNote: readNote
};
