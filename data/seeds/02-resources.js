/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('resources').truncate();
  await knex('resources').insert([
    { resource_name: 'Resource 1', resource_description: 'No desc :)' },
    { resource_name: 'Resource 2', resource_description: 'Not null' },
    { resource_name: 'Resource 3', resource_description: null },
    { resource_name: 'Resource 4', resource_description: null },
    { resource_name: 'Resource 5', resource_description: 'Resourc desc 5' },
  ]);
};
