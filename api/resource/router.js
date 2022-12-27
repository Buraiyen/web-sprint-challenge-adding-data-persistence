// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resources = require('./model');

router.get('/', (req, res) => {
  Resources.getAll().then((resources) => {
    res.status(200).json(resources);
  });
});

router.post('/', (req, res) => {
  const resource = req.body;
  Resources.insert(resource).then(() => {
    res.status(200).json({
      resource_name: resource.resource_name,
    });
  });
});

module.exports = router;
