const auth = async (req, res, next) => {
  console.log('auth middlewares');
  next();
};

module.export = auth;
