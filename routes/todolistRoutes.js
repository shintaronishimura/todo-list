const express = require("express");
const { async } = require("q");
const app = express();
const todolistModel = require("..models/todolist");

app.get("/todolists", async (req, res) => {
  const todolists = await todolistModel.find({});

  try {
    res.send(todolists);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
