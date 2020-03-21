const express = require("express");
const Resource = require("./resource-model");
const router = express.Router();

router.get("/", (req, res) => {
  Resource.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      res.status(500).json({
        errorMessage: "There was an error retrieving the list of resources"
      });
    });
});

router.post("/", (req, res) => {
  Resource.addResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "There was an error adding the resource" });
    });
});

module.exports = router;
