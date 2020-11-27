const fs = require('fs');

const removeNote = function(title, body) {
  const notes = loadNotes();

  const deleteNote = notes.filter(note => {
    if (deleteNote.length === 0) {
      deleteNote(note);
    } else {
    }
  });
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.js');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {}
};
