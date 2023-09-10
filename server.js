const express = require("express");
const app = express();
const mongoose = require("mongoose");

const todolistRouter = require(".routes/todolistRoutes");

app.use(todolistRouter);

mongoose
  .connect(
    "mongodb+srv://mdsakura0803:0203Peko@todolist.2btvnva.mongodb.net/todolist?retryWrites=true&w=majority"
  )
  .then(() => console.log("データベース接続に成功"));
