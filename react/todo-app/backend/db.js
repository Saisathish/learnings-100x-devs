const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.xsswcuc.mongodb.net/todos");

const todosSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model("todos", todosSchema);

module.exports = {
  todo
}