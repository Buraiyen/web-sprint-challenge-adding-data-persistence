const Resources = require('./model');

const validateResourcePost = (req, res, next) => {
  const { resource_name } = req.body;
  Resources.getResourceByName(resource_name)
    .then((resource) => {
      if (resource.length) {
        res.status(404).json({
          message: 'resource cannot have duplicate name',
        });
        return;
      }
      next();
    })
    .catch((err) => {
      console.log(`uh oh error in validating post ${err}`);
    });
};

module.exports = validateResourcePost;
