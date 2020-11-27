const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
//   res.send('testing');
  res.send(req.body);
  return;
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
});
