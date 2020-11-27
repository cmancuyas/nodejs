const fs = require('fs');

const removeNote = function(title, body) {
  const notes = loadNotes();

  const deleteNote = notes.filter(note => {
    return note.filter === title;
  });
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.js');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {}
};

const fsDeleteNote = function(note) {
  const dataJSON = JSON.stringify(note);
  fs.unlinkSync(dataJSON);
};
