require('../src/db/mongoose');

const User = require('../src/models/user');

User.findByIdAndUpdate('5db69f8c423d1f38103af48f', { age: 2 })
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
