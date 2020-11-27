require('./src/db/mongoose');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Models
const Task = require('./src/models/task');
const User = require('./src/models/user');

app.use(express.json());

//Get Tasks
app.get('/tasks', async (req, res) => {
  const tasks = new Task({});
  try {
    res.status(200).send(tasks);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Get Users

//Create User
app.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + ' ...');
});
