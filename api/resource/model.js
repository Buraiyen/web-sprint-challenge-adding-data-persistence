// build your `Resource` model here
const db = require('../../data/dbConfig');

const getAll = () => {
  return db('resources');
};

const insert = (resource) => {
  return db('resources').insert(resource);
};

const getResourceByName = (resourceName) => {
  return db('resources').where({ resource_name: resourceName });
};

module.exports = { getAll, insert, getResourceByName };
