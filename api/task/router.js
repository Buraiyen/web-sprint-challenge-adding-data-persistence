// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Tasks = require('./model');

router.get('/', (req, res) => {
  console.log('tasks');
});

module.exports = router;
