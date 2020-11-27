socket.emit('countUpdated', count);

socket.on('increment', () => {
  count++;
  // socket.emit('countUpdated', count);
  io.emit('countUpdated', count);
});

socket.emit('welcomeMessageToClient', welcomeMessageFromServer);
socket.on('btnWelcomeMessage', () => {
  io.emit('welcomeMessageToClient', welcomeMessageFromServer);
});
