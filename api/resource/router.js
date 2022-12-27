// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resources = require('./model');

router.get('/', (req, res) => {
  Resources.getAll().then((resources) => {
    res.status(200).json(resources);
  });
});

module.exports = router;
