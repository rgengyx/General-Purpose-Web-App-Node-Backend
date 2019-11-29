const con = require("../config/db");

exports.fetchSearchResult = function(input, callback) {
  var sql = "SELECT * FROM users WHERE username LIKE '%" + input.input + "%'";
  console.log(sql);
  con.query(sql, function(err, result) {
    if (err) throw err;
    callback(result);
  });
};
