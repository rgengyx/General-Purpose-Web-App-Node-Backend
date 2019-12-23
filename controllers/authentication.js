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
    // Store uesr in users DB.
    user = {
      id: uuidv4(),
      email: req.body.email,
      username: req.body.username,
      password: hash
    };

    authentication.verifyEmail(user, function(result) {
      // Verify if email exists
      if (result.length > 0) {
        res.send({ error: "email already exists" });
        return;
      } else {
        authentication.verifyUsername(user, function(result) {
          // Verify if username exists
          if (result.length > 0) {
            res.send({ error: "username already exists" });
            return;
          } else {
            authentication.storeUser(function() {
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
            });
          }
        });
      }
    });
  });
});

app.post("/login", function(req, res) {
  user = {
    id: uuidv4(),
    email: req.body.email
  };
  authentication.verifyEmail(user, function(result) {
    // Error: email does not exist
    if (result.length == 0) {
      res.send({ error: "email doesnt exist" });
      return;
    }

    bcrypt.compare(req.body.password, result[0].password, function(
      err,
      result2
    ) {
      // Error: password incorrect
      if (!result2) {
        res.send({ error: "password is incorrect" });
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
