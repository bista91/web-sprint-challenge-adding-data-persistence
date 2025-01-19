exports.up = function (knex) {
    return knex.schema.createTable('tasks', (table) => {
      table.increments('task_id'); // Primary key
      table.string('task_description').notNullable();
      table.string('task_notes');
      table.boolean('task_completed').defaultTo(false);
      table
        .integer('project_id') // Foreign key
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks');
  };
  