const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// const Task = mongoose.model('Task', {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// });

// const taskdb = new Task({
//   description: 'Learn C#',
//   completed: false
// });

// taskdb
//   .save()
//   .then(() => {
//     console.log(taskdb);
//   })
//   .catch(error => {
//     console.log('Error' + error);
//   });
