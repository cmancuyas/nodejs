const socket = io();

socket.on('countUpdated', count => {
  console.log('The count has been updated!', count);
});

document.querySelector('#increment').addEventListener('click', () => {
  console.log('clicked');
  socket.emit('increment');
});

socket.on('welcomeMessageFromServer', () => {
  console.log(welcomeMessageToClient);
});

socket.on('welcomeMessageFromServer', welcomeMessageToClient);

document.querySelector('#btnWelcomeMessage').addEventListener('click', () => {
  socket.emit('welcomeMessageToClient');
});
