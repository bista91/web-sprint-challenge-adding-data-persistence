exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('tasks').del();
    // Inserts seed entries
    await knex('tasks').insert([
      { task_description: 'Lay foundation', task_notes: 'Use concrete', task_completed: 0, project_id: 1 },
      { task_description: 'Study Knex.js migrations', task_notes: null, task_completed: 1, project_id: 2 },
    ]);
  };
  