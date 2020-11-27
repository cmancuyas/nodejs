//addUser, removeUser, getUser, getUsersInRoom
const users = [];

const addUser = ({ id, user, room }) => {
  //Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //Validate the data
  if (!username || !room) {
    return {
      error: 'username and room are required'
    };
  }
};
