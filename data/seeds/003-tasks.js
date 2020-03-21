exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          id: 1,
          task_description: "Task",
          task_notes: "These are notes",
          project_id: 1,
          completed: true
        },
        {
          id: 2,
          task_description: "Task 2",
          task_notes: "These are notes",
          project_id: 1,
          completed: false
        },
        {
          id: 3,
          task_description: "Task 3",
          task_notes: "These are notes",
          project_id: 1,
          completed: false
        },
        {
          id: 4,
          task_description: "Task 4",
          task_notes: "These are notes.",
          project_id: 2,
          completed: true
        },
        {
          id: 5,
          task_description: "Task 5",
          task_notes: "These are notes",
          project_id: 2,
          completed: false
        },
        {
          id: 6,
          task_description: "Task 6",
          task_notes: "These are notes",
          project_id: 3,
          completed: false
        },
        {
          id: 7,
          task_description: "Task 7",
          task_notes: "These are notes",
          project_id: 3,
          completed: true
        }
      ]);
    });
};
