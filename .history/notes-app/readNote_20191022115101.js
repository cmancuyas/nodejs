const loadNotes = require('./addNote');
const readNote = title => {
  const notes = loadNotes.loadNotes();
  const selectedNote = notes.filter(note => {
    return note.title === title;
  });

  console.log(selectedNote);
};

module.exports = {
  readNote: readNote
};
