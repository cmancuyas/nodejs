const fs = require('fs');

const removeNote = function(title, body) {
  const loadNote = loadNotes();
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.js');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {}
};
