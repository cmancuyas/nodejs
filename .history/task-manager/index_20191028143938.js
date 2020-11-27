const express = require('express');
require('./src/db/mongoose');

const User = require('./src/models/user');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);

  console.log(req.body);

  // user
  //   .save()
  //   .then(() => {
  //     res.send(user);
  //   })
  //   .catch(() => {});
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
});
