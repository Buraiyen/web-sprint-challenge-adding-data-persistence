const Projects = require('../project/model');

const validateTaskParams = (req, res, next) => {
  const { task_description, project_id } = req.body;
  if (!task_description || project_id === undefined) {
    res.status(404).json({
      message: 'task payload missing parameters',
    });
    return;
  }
  next();
};

const validateProjectId = (req, res, next) => {
  const { project_id } = req.body;
  Projects.getProjectById(project_id).then((project) => {
    if (!project.length) {
      res.status(404).json({
        message: 'not found',
      });
      return;
    }
    next();
  });
};

module.exports = { validateTaskParams, validateProjectId };
