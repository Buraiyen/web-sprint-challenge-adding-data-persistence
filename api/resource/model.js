// build your `Resource` model here
const db = require('../../data/dbConfig');

const getAll = () => {
  return db('resources');
};

const insert = (resource) => {
  return db('resources').insert(resource);
};

module.exports = { getAll, insert };
