const express = require("express");
const app = express();
const uuidv4 = require("uuid/v4");
const feed = require("../models/feed");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/fetchFeed", function(req, res) {
  feed.fetchFeed(function(result) {
    res.send(result);
  });
});

app.post("/storeFeed", function(req, res) {
  post = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text
  };
  feed.storeFeed(post);
});

module.exports = app;
