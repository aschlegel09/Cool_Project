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
      category: req.body.category,
      toDoListItem: req.body.toDoListItem,
      toDoListItem0: req.body.toDoListItem0,
      toDoListItem1: req.body.toDoListItem1,
      toDoListItem2: req.body.toDoListItem2,
      toDoListItem3: req.body.toDoListItem3,
      toDoListItem4: req.body.toDoListItem4,
      toDoListItem5: req.body.toDoListItem5,
      toDoListItem6: req.body.toDoListItem6,
      toDoListItem7: req.body.toDoListItem7,
      toDoListItem8: req.body.toDoListItem8,
      toDoListItem9: req.body.toDoListItem9,
      toDoListItem10: req.body.toDoListItem10,
      toDoListItem11: req.body.toDoListItem11,
      toDoListItem12: req.body.toDoListItem12,
      toDoListItem13: req.body.toDoListItem13,
      toDoListItem14: req.body.toDoListItem14,
      toDoListItem15: req.body.toDoListItem15,
      toDoListItem16: req.body.toDoListItem16,
      toDoListItem17: req.body.toDoListItem17,
      toDoListItem18: req.body.toDoListItem18,
      toDoListItem19: req.body.toDoListItem19,
      toDoListItem20: req.body.toDoListItem20





    }).then(function (dbItem) {
      res.json(dbItem);
    });
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