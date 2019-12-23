const express = require("express");
const app = express();
const feed = require("../models/feed");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid/v4");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/fetchFeed", function(req, res) {
  feed.fetchFeed(function(result) {
    res.send(result);
  });
});

app.post("/fetchPost", function(req, res) {
  var post = req.body;
  feed.fetchPost(post, function(result) {
    res.send(result);
  });
});

app.post("/storeFeed", function(req, res) {
  post = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
    userId: req.body.userId,
    username: req.body.username,
    time: new Date()
  };
  feed.storeFeed(post, function(result) {
    res.send(result);
  });
});

module.exports = app;
