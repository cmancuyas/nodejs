const fs = require('fs');

const removeNote = function(title, body) {
  const notes = loadNotes();

  const noteToBeDeleted = notes.filter(note => {
    return note.filter === title;
  });

  if (noteToBeDeleted.length !== 0) {
    fsDeleteNote(noteToBeDeleted);
    console.log('Note has been deleted');
  } else {
    console.log('Note does not exists');
  }
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
