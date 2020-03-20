const express = require("express");
const helmet = require("helmet");
// const ProjectRouter = require('')
//const ResourceRouter = require('')
//const TaskRouter = require('')
const server = express();
server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("Sprint Stuff");
});

// server.use("/api/projects", ProjectRouter);
// server.use("/api/resources", ResourceRouter);
// server.use("/api/tasks", TaskRouter);

module.exports = server;
