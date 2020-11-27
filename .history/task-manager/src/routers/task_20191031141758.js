const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = express.Router();

//Get all tasks
router.get('/tasks', auth, async (req, res) => {
  try {
    // const tasks = await Task.find({});
    // const tasks = await Task.find({ owner: req.user._id }); //1st method
    await req.user.populate('tasks').execPopulate(); //2nd method
    // res.status(200).send(tasks); //1st method
    res.status(200).send(req.user.tasks); //2nd method
  } catch (e) {
    res.status(400).send(e);
  }
});

//Create task
router.post('/tasks', auth, async (req, res) => {
  // const task = new Task(req.body);
  const task = new Task({
    ...req.body,
    owner: req.user._id
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Get task from _id
router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id;
  try {
    // const task = await Task.findById(_id);
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Update task
router.patch('/tasks/:id', auth, async (req, res) => {
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
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    // const task = await Task.findByIdAndUpdate(_id);

    updates.forEach(update => (task[update] = req.body[update]));

    await task.save();
    if (!task) {
      return res.status(404).send();
    }

    // const task = await Task.findByIdAndUpdate(_id, req.body, {
    //   new: true,
    //   runValidators: true
    // });
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Delete task
router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(_id);
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!task) {
      return res.status(400).send('Not authorized to delete task');
    }
    res.status(200).send('Successfully deleted task' + task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
