const mongoose = require("mongoose");

mongoose.connect(""); // mongo keys

const todosSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model("todos", todosSchema);

module.exports = {
  todo
}