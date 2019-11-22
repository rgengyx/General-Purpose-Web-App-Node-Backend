const express = require("express");
const app = express();

const uuidv4 = require("uuid/v4");

const authentication = require("../models/authentication");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";

app.post("/signup", function(req, res) {
  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);
  });

  user = {
    id: uuidv4(),
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };
  // authentication.signup(user);
});

app.post("/login", function(req, res) {
  user = {
    id: uuidv4(),
    email: req.body.email,
    password: req.body.password
  };
  authentication.login(user, function(result) {
    res.send(result[0] != undefined);
  });
});

module.exports = app;
