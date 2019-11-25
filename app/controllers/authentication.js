const express = require("express");
const app = express();
const uuidv4 = require("uuid/v4");
const authentication = require("../models/authentication");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
      if (result != "0") {
        res.send(result);
        return;
      }

      // Sign in successfully
      jwt.sign(
        {
          id: uuidv4(),
          username: req.body.username,
          email: req.body.email
        },
        "secretkey",
        (err, token) => {
          res.send({
            user: {
              id: user.id,
              username: user.username,
              token: token
            }
          });
        }
      );
      return;
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
      result2
    ) {
      // Error: password incorrect
      if (!result2) {
        res.send("2");
        return;
      }

      // Sign in successfully
      jwt.sign(
        {
          id: result[0].id,
          username: result[0].username,
          email: result[0].email
        },
        "secretkey",
        (err, token) => {
          res.send({
            user: {
              id: result[0].id,
              username: result[0].username,
              token: token
            }
          });
        }
      );
      return;
    });
  });
});

module.exports = app;
