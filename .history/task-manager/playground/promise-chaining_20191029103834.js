require('../src/db/mongoose');

const User = require('../src/models/user');

User.findByIdAndUpdate('5db68f8f47f83030703ce5e0', { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });

const updateAgeAndCount = async (id, age) => {
  
};
