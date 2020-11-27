const socket = io();

// socket.on('countUpdated', count => {
//   console.log('The count has been updated!', count);
// });

// document.querySelector('#increment').addEventListener('click', () => {
//   console.log('clicked');
//   socket.emit('increment');
// });

socket.on('welcomeMessage', () => {
  console.log(welcomeMessage);
});

document.querySelector('#welcomeMessage').addEventListener('click', () => {
  socket.emit('welcomeMessage');
});
