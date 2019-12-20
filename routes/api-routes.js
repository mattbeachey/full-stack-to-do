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
    console.log("setting up delete")
    app.delete("/api/todos/:id", async function(req, res){
        console.log(req.params.id)
        const todo = await db.Todo.destroy({where: {id: req.params.id}})
        res.json(todo);
    })

    // app.delete("/api/todos/:id", function(req, res){
    //     res.send(`"hi", ${req.params.id}`)
    // })

};
