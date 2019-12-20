

const db = require("./models")
const cTable = require("console.table")
const express = require("express")

//set up express app
const app = express();
const PORT = process.env.PORT || 3000;

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
app.use(express.static("public"))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});



//function to add to database
// db.Todo.create({task: "say hi to cow"}).then(function(){
//     console.log("added")
// });

db.Todo.findAll({}).then(function(res){
    todoArray = []
    res.forEach(element => {
        name = element.dataValues.task
        todoArray.push(name)
    });
    console.table(todoArray)
})




// Starts the server to begin listening
// =============================================================

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
