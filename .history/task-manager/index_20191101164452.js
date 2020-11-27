require('./src/db/mongoose');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const userRouter = require('./src/routers/user');
const taskRouter = require('./src/routers/task');

const multer = require('multer');
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    // cb(new Error('File must be a pdf'));
    // cb(undefined, true);
    // cb(undefined, false);
  }
});

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send();
});

// app.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
//   res.send();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + ' ...');
});

const Task = require('./src/models/task');
const User = require('./src/models/user');

// const main = async () => {
// const task = await Task.findById('5dba6d2488baad22d0913709');
// await task.populate('owner').execPopulate();
// console.log(task.owner);

//   const user = await User.findById('5dba7399ffe11014708d5074');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// };

// main();
