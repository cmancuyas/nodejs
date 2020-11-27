require('./src/db/mongoose');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Models
const Task = require('./src/models/task');
const User = require('./src/models/user');

app.use(express.json());

const router = new express.Router();
router.get('/test', (req, res) => {
  res.send('This is from my other router');
});

//Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Create task
app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Get task from _id
app.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Update task
app.patch('/tasks/:id', async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];
  const isValidOperation = updates.every(update => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send('Invalid updates');
  }
  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Delete task
app.delete('/tasks/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      return res.status(400).send('cannot delete task   ');
    }
    res.status(200).send('Successfully deleted task' + task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Get user
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Get user from _id
app.get('/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Update user from _id
app.patch('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findOneAndUpdate(_id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).send(user);
  } catch (e) {
    res.status(500).send('Successfully updated' + user);
  }
});

//Delete user
app.delete('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send();
    }

    res.status(200).send('Successfully deleted ' + user);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Create user
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
