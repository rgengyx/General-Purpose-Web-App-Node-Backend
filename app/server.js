const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodeapp"
});

app.get("/fetchFeed", function(req, res) {
  sql = "select * from feed";
  con.query(sql, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
