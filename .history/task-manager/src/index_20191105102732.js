const app = require('./app');

require('./db/mongoose');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + ' ...');
});
