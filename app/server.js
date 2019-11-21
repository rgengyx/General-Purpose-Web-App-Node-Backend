const express = require("express");
const path = require("path");

const app = express();
const bodyParser = require("body-parser");

const uuidv4 = require("uuid/v4");

app.use(express.static(path.join(__dirname, "public")));

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodeapp"
});

app.get("/fetchFeed", function(req, res) {
  sql = "SELECT * FROM feed";
  con.query(sql, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/storeFeed", function(req, res) {
  var sql = "INSERT INTO feed (id, title, text) VALUES ?";

  var values = [[uuidv4(), req.body.title, req.body.text]];
  con.query(sql, [values], function(err, result) {
    if (err) throw err;
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
