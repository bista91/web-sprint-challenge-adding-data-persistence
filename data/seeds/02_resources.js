exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('resources').del();
    // Inserts seed entries
    await knex('resources').insert([
      { resource_name: 'Lumber', resource_description: 'Used for construction' },
      { resource_name: 'Knex.js Docs', resource_description: 'Documentation for Knex.js' },
    ]);
  };
  