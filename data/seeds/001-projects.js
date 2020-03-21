exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Project 1",
          project_description: `Project1 description`,
          completed: true
        },
        {
          id: 2,
          project_name: "Project 2",
          project_description: `Project2 description`,
          completed: false
        },
        {
          id: 3,
          project_name: " Project 3 ",
          project_description: `Project3 description`,
          completed: false
        }
      ]);
    });
};
