const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
const Task = require('./task');

const UserSchema = new Schema(
  {
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
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    avatar: {
      type: Buffer
    }
  },
  {
    timestamps: true
  }
);

UserSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner'
});

UserSchema.methods.toJSON = function() {
  const userObject = this.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;

  return userObject;
};

UserSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign({ _id: this.id.toString() }, process.env.JWT_SECRET);

  this.tokens = this.tokens.concat({ token });

  await this.save();

  return token;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Unable to login');
  }
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
  }

  next();
});

//Delete user tasks when user is removed
UserSchema.pre('remove', async function(next) {
  await Task.deleteMany({ owner: this._id });
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
