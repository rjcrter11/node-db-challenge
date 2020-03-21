const express = require("express");
const helmet = require("helmet");
const projectRouter = require("../routers/project-router");
const ResourceRouter = require("../routers/resource-router");
const TaskRouter = require("../routers/task-router");
const server = express();
server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("Sprint Stuff");
});

server.use("/api/projects", projectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);

module.exports = server;
