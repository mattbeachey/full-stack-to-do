// const connection = require("../config")
const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes){
    class Todo extends Sequelize.Model {}
    Todo.init({
      task: {
          type:DataTypes.STRING, 
          allowNull: false
        },
      done: {
          type:DataTypes.BOOLEAN, 
          defaultValue: false
        }
    }, { sequelize, modelName: 'Todo' })

    // Todo.sync() //could sync multiple models at once, see homework for how
    return Todo;
}


