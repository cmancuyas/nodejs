const loadNotes = require('./addNote');

const listNotes = () => loadNotes.loadNotes();

console.log(listNotes());

module.exports = {
  listNotes: listNotes
};
