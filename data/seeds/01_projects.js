exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('projects').del();
    // Inserts seed entries
    await knex('projects').insert([
      { project_name: 'Build a house', project_description: 'A simple house', project_completed: 0 },
      { project_name: 'Learn Knex', project_description: 'Learn how to use Knex.js', project_completed: 1 },
    ]);
  };
  