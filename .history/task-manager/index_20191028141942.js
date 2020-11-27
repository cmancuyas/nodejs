const express = require('express');
require('./src/db/mongoose');
const User = require('./models/user');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  res.send('testing');
  console.log(req.body);
  return;
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
});
