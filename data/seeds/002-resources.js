exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Computer",
          resource_description: "Description."
        },
        {
          id: 2,
          resource_name: "Keyboard",
          resource_description: "Description."
        },
        {
          id: 3,
          resource_name: "Coffee",
          resource_description: "Description"
        },
        {
          id: 4,
          resource_name: "Postman",
          resource_description: "Description"
        },
        {
          id: 5,
          resource_name: "SQLiteStudio",
          resource_description: "Description"
        },
        {
          id: 6,
          resource_name: "Pen",
          resource_description: "Description"
        },
        {
          id: 7,
          resource_name: "Docs",
          resource_description: "Description"
        },
        {
          id: 8,
          resource_name: "GitHub",
          resource_description: "Description"
        }
      ]);
    });
};
