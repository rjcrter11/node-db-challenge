const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourceById,
  addResource
};

function getResources() {
  return db("resources");
}

function getResourceById(resourceId) {
  return db("resources")
    .where({ id: resourceId })
    .first();
}

function addResource(newResource) {
  return db("resources")
    .insert(newResource)
    .then(([id]) => {
      return getResourceById(id);
    });
}
