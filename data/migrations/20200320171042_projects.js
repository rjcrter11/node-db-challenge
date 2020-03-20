exports.up = function(knex) {
  return knex.shema
    .createTable("projects", (tbl) => {
      tbl.increments();

      tbl.string("project_name", 255).notNullable();
      tbl.string("project_description", 255);
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })

    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl
        .string("resource_name", 255)
        .unique()
        .notNullable();
      tbl.string("resource_description", 255);
    })

    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_description", 255);
      tbl.string("task_notes", 300);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources");
};
