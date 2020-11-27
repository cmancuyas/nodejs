const mongoose = require('mongoose');
const Schema = new mongoose.Schema();

const Task = new Schema({
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  }
});

TaskSchema.pre('save', async function(next) {
  const user = this;
});

module.exports = mongoose.model('Task', TaskSchema);
