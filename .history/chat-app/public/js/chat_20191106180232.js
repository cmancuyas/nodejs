const socket = io();

// socket.on('countUpdated', count => {
//   console.log('The count has been updated!', count);
// });

// document.querySelector('#increment').addEventListener('click', () => {
//   console.log('clicked');
//   socket.emit('increment');
// });

// socket.on('welcomeMessageToClient', welcomeMessageFromServer => {
//   console.log('Message from client to server: ', welcomeMessageFromServer);
// });

// document.querySelector('#btnWelcomeMessage').addEventListener('click', () => {
//   console.log('Message from client: ', 'This message is for server');
//   socket.emit('btnWelcomeMessage');
// });

socket.on('message', message => {
  console.log(message);
});

document.querySelector('#message-form').addEventListener('submit', e => {
  e.preventDefault();

  const message = e.target.elements.message.value;

  socket.emit('sendMessage', message, error => {
    // console.log('The message was delivered', message);
    if (error) {
      return console.log(error);
    }
    console.log('Message delivered');

    io.emit('message', message);
  });
});

document.querySelector('#send-location').addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your browser');
  }

  navigator.geolocation.getCurrentPosition(position => {
    // console.log(position);
    socket.emit(
      'sendLocation',
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      },
      () => {
        console.log('Location shared');
      }
    );
  });
});
