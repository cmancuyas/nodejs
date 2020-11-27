const fs = require('fs');

const deleteNote = function(title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });

  console.log(notesToKeep);

  if (notesToKeep.length !== 0) {
    fsSaveNotes(notesToKeep);
    console.log('Note has been deleted');
  } else {
    console.log('Note does not exist');
  }
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {}
};

const fsSaveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  deleteNote: deleteNote
};
