const express = require("express");
const Project = require("./project-model");
const Task = require("./task-model");
const router = express.Router();

router.get("/", (req, res) => {
  Project.getProjects()
    .then((projects) => {
      projects.map((project) => {
        if (project.completed === 0) {
          project.completed = false;
        } else {
          project.completed = true;
        }
      });
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Error retrieving projects" });
    });
});

router.post("/", (req, res) => {
  Project.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Error adding project" });
    });
});

router.post("/:id/tasks", (req, res) => {
  Task.addTask({ project_id: req.params.id, ...req.body })
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "There was an error adding the task" });
    });
});

module.exports = router;
