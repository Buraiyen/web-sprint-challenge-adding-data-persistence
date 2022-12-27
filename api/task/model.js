// build your `Task` model here
const db = require('../../data/dbConfig');

const getAll = () => {
  return db('projects').join(
    'tasks',
    'projects.project_id',
    'tasks.project_id'
  );
};

module.exports = { getAll };
