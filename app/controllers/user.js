const express = require("express");
const app = express();
const user = require("../models/user");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/fetchFriends", function(req, res) {
  var values = {
    id: req.body.id
  };
  user.fetchFriends(values, function(result) {
    res.send(result);
  });
});

app.post("/fetchUserInfo", function(req, res) {
  var userData = req.body;
  user.fetchUserInfo(userData, function(result) {
    res.send(result);
  });
});

module.exports = app;
