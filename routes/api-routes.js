const db = require("../models")

module.exports = function(app){
    //use app to set up api routes

    //route to create a todo
    app.post("/api/todos", async function (req, res){
        const todo = await db.Todo.create({task: req.body.task})
        res.json(todo);
    })

    //route to get all todos
    app.get("/api/todos", function( req,res){
        db.Todo.findAll({}).then(function(todos){
            res.json(todos)
        });
    });

};
