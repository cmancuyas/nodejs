require('../src/db/mongoose');

const User = require('../src/models/user');
const Task = require('../src/models/task');

// User.findByIdAndUpdate('5db68f8f47f83030703ce5e0', { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount('5db68f8f47f83030703ce5e0', 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5db7d77b7fe0284b6483ed0e')
  .then(count => {
    console.log('Task not complete: ' + count);
  })
  .catch(e => {
    console.log(e);
  });
