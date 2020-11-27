const fs = require('fs');

const removeNote = function(title, body) {
  const notes = loadNotes();

  const deleteNote = notes.filter(note => {
    if (deleteNote.length === 0) {
      deleteNote(note);
      console.log('Note has been deleted');
    } else {
      console.log('Note does not existss');
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

const deleteNote = function(note) {
  const dataJSON = JSON.stringify(note);
  fs.readFileSync(dataJSON);
};
