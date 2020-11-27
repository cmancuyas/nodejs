const fs = require('fs')
const addNote = function(title, body){
    const notes = loadNotes();
}

loadNotes => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
    }catch(e){

    }
}