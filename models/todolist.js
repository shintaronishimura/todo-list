const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const TodoListSchema = new mongoose.Schema({
  todo: { type: String, required: true, trim: true },
  isCompleted: { type: Boolean, default: false },
  id: { type: String, required: true },
});

const TodoList = mongoose.model("TodoList", TodoListSchema);

module.exports = TodoList;
