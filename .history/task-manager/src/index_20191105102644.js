const app = require('app');

require('./db/mongoose');

const express = require('express');
const app = express();

const PORT = process.env.PORT;

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + ' ...');
});

const Task = require('./models/task');
const User = require('./models/user');
