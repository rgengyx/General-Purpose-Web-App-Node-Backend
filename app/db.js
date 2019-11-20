var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "nodeapp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  sql = "select * from feed";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});
