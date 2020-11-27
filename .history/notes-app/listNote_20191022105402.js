const loadNotes = require('./addNote');

const listNotes = () => {
  const notes = loadNotes.loadNotes();
};
