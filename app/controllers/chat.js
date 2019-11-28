const express = require("express");
const app = express();
const chat = require("../models/chat");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid/v4");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/fetchChatHistory", function(req, res) {
  var data = req.body;
  chat.fetchChat(data, function(result) {
    res.send(result);
  });
});

app.storeChat = function(data) {
  data.id = uuidv4();
  data.time = new Date();
  chat.storeChat(data, function(result) {
    console.log(result);
  });
};

module.exports = app;
