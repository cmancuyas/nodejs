const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
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
    unique: true,
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

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Unable to login');
  }

  console.log(user);
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};

//Hash the password before saving
UserSchema.pre('save', async function(next) {
  console.log('User: just before saving...');

  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
    console.log(this.password);
  }

  next();
});

User = mongoose.model('User', UserSchema);

module.exports = User;

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
