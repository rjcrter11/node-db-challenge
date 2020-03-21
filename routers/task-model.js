const db = require("../data/db-config");

module.exports = {
  getTasks,
  getTaskById,
  addTask
};

function getTasks() {
  return db
    .select(
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.completed",
      "projects.project_name",
      "projects.project_description"
    )
    .from("tasks")
    .join("projects", "tasks.project_id", "projects.id");
}

function getTaskById(taskId) {
  return db("tasks")
    .where({ id: taskId })
    .first();
}

function addTask(newTask, project_id) {
  return db("tasks")
    .insert(newTask, "id")
    .where({ project_id: project_id });
}
