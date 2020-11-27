const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => {
    return note.filter === title;
  });

  const duplicateNotes = notes.filter(note => {
    return note.filter === title;
  });

  if (duplicateNotes.length === 0) {
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

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  addNote: addNote,
  loadNotes: loadNotes
};
