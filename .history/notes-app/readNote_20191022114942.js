const loadNotes = require('./addNote');
const readNote = title => {
  const loadNotes = loadNotes();
  const selectedNote = notes.filter(note => {
    return note.title === title;
  });
};
