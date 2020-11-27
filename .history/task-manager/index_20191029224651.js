require('./src/db/mongoose');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//Models
const Task = require('./src/models/task');
const User = require('./src/models/user');

const userRouter = require('./src/routers/user');
const taskRouter = require('./src/routers/task');
app.use(express.json());
app.use(userRouter);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + ' ...');
});
