const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const taskdb = new Task({
  description: 'Learn C#',
  completed: false
});

taskdb
  .save()
  .then(() => {
    console.log(taskdb);
  })
  .catch(error => {
    console.log('Error' + error);
  });