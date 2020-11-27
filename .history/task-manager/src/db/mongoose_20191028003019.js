const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const me = new User({
  name: 'Kimbee',
  age: 27
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log('Error' + error);
  });

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const TaskDB = new Task({
  description: 'Learn Angular JS',
  completed: false
});

TaskDB.save()
  .then(() => {
    console.log(TaskDB);
  })
  .catch(error => {
    console.log('Error' + error);
  });
