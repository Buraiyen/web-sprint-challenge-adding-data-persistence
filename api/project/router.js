// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('test project');
});

module.exports = router;
