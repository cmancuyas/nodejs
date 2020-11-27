const generateMessage = text => {
  return {
    text,
    createdAt: new Date().getTime()
  };
};

const generateLocationMessage = url => {
  return {
    url,
    createdAt: new Date().getTime()s
  };
};

module.exports = {
  generateMessage
};
