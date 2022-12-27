const validateProjectPost = (req, res, next) => {
  const { project_name } = req.body;
  if (!project_name) {
    res.status(404).json({
      message: 'payload is missing project name',
    });
    return;
  }
  next();
};

module.exports = { validateProjectPost };
