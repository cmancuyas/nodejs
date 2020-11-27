const fs = require('fs');
const addNote = function(title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(note => {
    return note.filter === title;
  });

  if (duplicateNotes === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log('Notes has been added');
  } else {
    console.log('Note already exists');
  }
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
