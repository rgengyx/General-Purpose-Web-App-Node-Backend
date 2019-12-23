const express = require("express");
const app = express();
const search = require("../models/search");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/fetchSearchResult", function(req, res) {
  var input = req.body;
  search.fetchSearchResult(input, function(result) {
    res.send(result);
  });
});

module.exports = app;
