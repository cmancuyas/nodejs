const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
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
