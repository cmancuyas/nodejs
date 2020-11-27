const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
});
