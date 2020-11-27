const loadNotes = require('./addNote');

const listNotes = () => loadNotes.loadNotes();

module.exports = {
  listNotes: listNotes
};
