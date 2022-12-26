/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate();
  await knex('tasks').insert([
    {
      task_description: 'Task description 1',
      task_notes: 'Notes 1',
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: 'Task description 2',
      task_notes: 'Notes 2',
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: 'Task description 3',
      task_notes: 'Notes 3',
      task_completed: true,
      project_id: 3,
    },
  ]);
};
