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

const main = async () => {
  const task = await Task.findById('5dba6d2488baad22d0913709');
  console.log(task.owner);
  await task.populate();
};

main();
