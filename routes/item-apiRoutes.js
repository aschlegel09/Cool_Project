var db = require("../models");

module.exports = function (app) {
  // Get all items in list
  app.get("/api/items", function (req, res) {
    db.Item.findAll().then(function (dbItems) {
      res.json(dbItems);
    });
  });

  // Create a new item
  app.post("/api/items", function (req, res) {
    console.log("in post items")
    db.Item.create({
      text: req.body.text,
      description: req.body.description,
      duration: req.body.duration,
      complete: req.body.complete,
      category: req.body.category
    }).then(function (dbItem) {
      res.json(dbItem);
    });
    db.ToDoListItem.create({
      name: req.body.name
    }).then(function(dbTodo) {
      res.json(dbTodo);
      console.log("todo item", dbTodo);
    })
  });

  // Delete an example by id
  app.delete("/api/items/:id", function (req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbItem) {
      res.json(dbItem);
    });
  });
};