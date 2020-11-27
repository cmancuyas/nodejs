//addUser, removeUser, getUser, getUsersInRoom
const users = [];

const addUser = ({ id, username, room }) => {
  //Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //Validate the data
  if (!username || !room) {
    return {
      error: 'username and room are required'
    };
  }

  //Check for existing user
  const existingUser = users.find(user => {
    return user.room === room && user.username === username;
  });

  //Validate username
  if (existingUser) {
    return {
      error: 'Username is in use!'
    };
  }

  //Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => {
  return users.find(user => user.id === id);
};

addUser({
  id: 22,
  username: 'Kobe',
  room: 'Angular'
});

addUser({
  id: 23,
  username: 'Kimbee',
  room: 'Angular'
});

addUser({
  id: 24,
  username: 'Kobe',
  room: 'Nodejs'
});

// console.log(users);

// const res = addUser({
//   id: 33,
//   username: 'kimbee',
//   room: 'nodejs'
// });

// console.log(res);

// const removedUser = removeUser(22);

// console.log(removedUser);
// console.log(users);
