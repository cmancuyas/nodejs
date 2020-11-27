const loadNotes = require('./addNote');
const readNote = title => {
  const loadNotes = loadNotes.loadNotes();
  const selectedNote = notes.filter(note => {
    return note.title === title;
  });

  console.log(selectedNote);
};
