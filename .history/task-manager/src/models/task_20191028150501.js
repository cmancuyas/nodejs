const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

modul;
