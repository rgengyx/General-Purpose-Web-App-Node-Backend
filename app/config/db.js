var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodeapp"
});

module.exports = db;
