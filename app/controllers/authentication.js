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
      if (result == "0") {
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
      }
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
