var db = require("../models");

module.exports = function (app) {
    app.get("/api/todos", function (req, res) {
        var query = {};
        if (req.query.item_id) {
            query.ItemId = req.query.item_id;
        }
        db.ToDoListItem.findAll({
            where: query,
            inculde: [db.Item]
        }).then(function (dbToDo) {
            res.json(dbToDo);
        });
    });

    app.get("/api/todos/:id", function (req, res) {
        db.ToDoListItem.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Item]
        }).then(function (dbToDo) {
            res.json(dbToDo);
        });
    });

    app.post("/api/todos", function (req, res) {
        db.ToDoListItem.create(req.body).then(function (dbToDo) {
            res.json(dbToDo);
        });
    });

    app.delete("/api/todos/:id", function (req, res) {
        db.ToDoListItem.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbToDo) {
            res.json(dbToDo);
        });
    });

    app.put("/api/posts", function (req, res) {
        db.ToDoListItem.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbToDo) {
            res.json(dbToDo);
        });
    });
};