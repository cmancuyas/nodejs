const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    unique: true,
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

UserSchema.pre('save', function(next) {
  console.log('User: just before saving...');

  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 8)
  }

  next();
});

module.exports = mongoose.model('User', UserSchema);
