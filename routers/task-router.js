const express = require("express");
const Task = require("./task-model");
const router = express.Router();

router.get("/", (req, res) => {
  Task.getTasks()
    .then((tasks) => {
      tasks.map((task) => {
        if (task.completed === 0) {
          task.completed = false;
        } else {
          task.completed = true;
        }
      });
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          errorMessage: "There was an error retrieving the list of tasks"
        });
    });
});

module.exports = router;
