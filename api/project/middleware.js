const validateProjectPost = (req, res, next) => {
  console.log(req.body);
  next();
};

module.exports = { validateProjectPost };
