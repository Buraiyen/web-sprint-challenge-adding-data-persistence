// build your `Project` model here
const db = require('../../data/dbConfig');

const getAll = () => {
  return db('projects');
};

const getProjectById = (projectId) => {
  return db('projects').where({ project_id: projectId });
};

const insert = (project) => {
  try {
    return db('projects').insert(project);
  } catch (err) {
    console.log(`Error occured when inserting project. ${err}`);
  }
};

module.exports = { getAll, insert, getProjectById };
