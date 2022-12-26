// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Projects = require('./model');

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

module.exports = router;
