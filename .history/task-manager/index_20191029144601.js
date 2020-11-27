const express = require('express');
const app = express();
app.use(express(json));

const PORT = process.env.PORT || 3000;

//Models
const Task = require('./src/models/task');
const User = require('./src/models/user');

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + ' ...');
});
