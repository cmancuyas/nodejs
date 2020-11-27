require('../src/db/mongoose');
const Task = require('../src/models/task');
Task.findByIdAndDelete('5db69f8c423d1f38103af48f')
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
