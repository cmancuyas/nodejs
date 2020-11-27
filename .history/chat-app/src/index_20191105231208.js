const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');

app.listen(PORT, () => {
  console.log('Server is listening to port ' + PORT + '...');
});
