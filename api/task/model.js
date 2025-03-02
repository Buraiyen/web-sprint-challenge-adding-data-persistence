// build your `Task` model here
const db = require('../../data/dbConfig');

const getAll = () => {
  return db('projects').join(
    'tasks',
    'projects.project_id',
    'tasks.project_id'
  );
};

const insert = (task) => {
  return db('tasks').insert(task);
};

module.exports = { getAll, insert };
