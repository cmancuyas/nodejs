require('./src/db/mongoose');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const userRouter = require('./src/routers/user');
const taskRouter = require('./src/routers/task');

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + ' ...');
});

const Task = require('./src/models/task');
const User = require('./src/models/user');

const main = async () => {
  const task = await Task.findById('5dba6d2488baad22d0913709');
  await task.populate('owner').execPopulate();
  console.log(task.owner);

  const user = await User.findById('5dba6d1e88baad22d0913707');
  console.log(user.tasks);
};

main();
