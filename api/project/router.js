// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('./model');
const { validateProjectPost } = require('./middleware');

// GET all projects
router.get('/', (req, res) => {
  Projects.getAll().then((projects) => {
    // SQLite3 defines booleans as either 0 or 1
    // This loop replaces the project_completed values to
    // either true or false
    projects.forEach((project) => {
      if (project.project_completed) {
        project.project_completed = true;
      } else {
        project.project_completed = false;
      }
    });

    res.status(200).json(projects);
  });
});

// POST project
router.post('/', validateProjectPost, (req, res) => {
  const project = req.body;
  if (project.project_completed === undefined) {
    project.project_completed = false;
  } else if (project.project_completed === 0) {
    project.project_completed = false;
  } else if (project.project_completed === 1) {
    project.project_completed = true;
  }

  Projects.insert(project)
    .then(() => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

module.exports = router;
