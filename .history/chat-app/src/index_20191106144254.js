const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

let count = 0;

io.on('connection', socket => {
  console.log('New Websocket Connection');
  // socket.emit('countUpdated', count);

  // socket.on('increment', () => {
  //   count++;
  //   // socket.emit('countUpdated', count);
  //   io.emit('countUpdated', count);
  // });

  let welcomeMessage = 'Welcome to my chat app';

  socket.emit('welcomeMessage', welcomeMessage);
  socket.on('welcomeMessage', () => {
    io.emit('welcomeMessage');
  });
});

server.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT + '...');
});
