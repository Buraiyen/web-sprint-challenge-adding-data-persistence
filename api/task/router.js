// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model');
const { validateTaskParams, validateProjectId } = require('./middleware');

router.get('/', (req, res) => {
  Tasks.getAll().then((tasks) => {
    tasks.forEach((task) => {
      if (task.task_completed) {
        task.task_completed = true;
      } else {
        task.task_completed = false;
      }
    });
    res.status(200).json(tasks);
  });
});

router.post('/', validateTaskParams, validateProjectId, (req, res) => {
  const task = req.body;
  Tasks.insert(task);
});

module.exports = router;
