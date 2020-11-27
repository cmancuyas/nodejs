const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: 18,
    validate(value) {
      if (value < 18) {
        throw new Error('Must be 18 and above');
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"');
      }
    }
  }
});

const user = new User({
  name: ' Uchiha   Sasuke  ',
  age: 19,
  email: 'sasuke@cc.com'
});

user
  .save()
  .then(() => {
    console.log(user);
  })
  .catch(error => {
    console.log('Error' + error);
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
