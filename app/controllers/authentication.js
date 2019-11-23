const express = require("express");
const app = express();

const uuidv4 = require("uuid/v4");

const authentication = require("../models/authentication");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.post("/signup", function(req, res) {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    user = {
      id: uuidv4(),
      email: req.body.email,
      username: req.body.username,
      password: hash
    };
    authentication.signup(user, function(result) {
      res.send(result);
    });
  });
});

app.post("/login", function(req, res) {
  user = {
    id: uuidv4(),
    email: req.body.email
  };
  authentication.login(user, function(result) {
    // Error: email does not exist: code 1
    if (result.length == 0) {
      res.send("1");
      return;
    }

    bcrypt.compare(req.body.password, result[0].password, function(
      err,
      result
    ) {
      // Error: password incorrect
      if (!result) {
        res.send("2");
        return;
      }

      // Sign in successfully
      res.send("0");
    });
  });
});

module.exports = app;
