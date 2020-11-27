require('./src/db/mongoose');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const userRouter = require('./src/routers/user');
const taskRouter = require('./src/routers/task');

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET request are disabled');
//   } else {
//     next();
//   }
// });

// Middleware
// app.use((req, res, next) => {
//   res.status(503).send('Site is under maintenance. Check back soon!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + ' ...');
});




