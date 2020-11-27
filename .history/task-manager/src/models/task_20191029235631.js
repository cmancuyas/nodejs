const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

const TaskSchema = new userSchema({
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Task', TaskSchema);
