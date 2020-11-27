const fs = require('fs');
const addNote = function(title, body) {
  const notes = loadNotes();

  saveNotes(notes);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
