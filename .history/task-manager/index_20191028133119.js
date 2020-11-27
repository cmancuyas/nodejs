const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.post('/users', (req, res) => {
  res.send('Testing');
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
});
