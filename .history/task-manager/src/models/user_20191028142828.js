const mongoose = require('mongoose');
const validator = require('validator');

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
        throw new Error('Age must be 18 and above');
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

// const user = new User({
//   name: ' Uchiha   Sasuke  ',
//   age: 19,
//   email: 'sasuke@cc.com',
//   password: '            r1232'
// });

// user
//   .save()
//   .then(() => {
//     console.log(user);
//   })
//   .catch(error => {
//     console.log('Error' + error);
//   });

module.export = User;
