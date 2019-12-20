const db = require("./models")

module.exports = function(app){
    //use app to set up api routes

    //route to create
    app.post("/api/todo", function (req, res){
        db.Todo.create({name: req.body})
    })
}
