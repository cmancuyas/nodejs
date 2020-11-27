const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userOneId = mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: 'Christopher Mancuyas',
  email: 'christopher.mancuyas@cebuoversea.com',
  password: 'admin123!',
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }
  ]
};
