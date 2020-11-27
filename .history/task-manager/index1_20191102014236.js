const express = require('express');
require('./src/db/mongoose');

const User = require('./src/models/user');
const Task = require('./src/models/task');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);

  console.log(user);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.get('/users', (req, res) => {
  User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(e => {
      res.status(500).send(e);
    });
});

app.get('/users/:id', (req, res) => {
  // console.log(req.params);
  const _id = req.params.id;
  User.findById(_id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(e => {
      res.status(404).send(e);
    });
});

app.post('/tasks', (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.get('/tasks', (req, res) => {
  Task.find({})
    .then(tasks => res.send(tasks))
    .catch(e => {
      res.status(500).send(e);
    });
});

app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then(task => {
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    })
    .catch(e => {
      res.status(500).send(e);
    });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '...');
});


// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
//     expiresIn: '7 days'
//   });
//   console.log(token);

//   const data = jwt.verify(token, 'thisismynewcourse');
//   console.log(data);
// };

// myFunction();

// const pet = {
//   name: 'Kobe'
// };

// console.log(pet);
// console.log(JSON.stringify(pet));


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



const multer = require('multer');
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    // if (!file.originalname.endsWith('.pdf')) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('please upload a Word document'));
    }

    cb(undefined, true);

    // cb(new Error('File must be a pdf'));
    // cb(undefined, true);
    // cb(undefined, false);
  }
});

// const errorMiddleware = (req, res, next) => {
//   throw new Error('From my middleware');
// };

app.post(
  '/upload',
  upload.single('upload'),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// app.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
//   res.send();
// });