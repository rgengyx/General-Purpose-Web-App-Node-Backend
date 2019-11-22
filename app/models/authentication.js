const con = require("../config/db");

exports.signup = function(user) {
  var sql = "INSERT INTO users (id, email, username, password) VALUES ?";
  var values = [[user.id, user.email, user.username, user.password]];
  con.query(sql, [values], function(err) {
    if (err) throw err;
  });
};

exports.login = function(user, callback) {
  var sql =
    "SELECT * FROM users WHERE email = '" +
    user.email +
    "' AND password = '" +
    user.password +
    "'";

  con.query(sql, function(err, result) {
    if (err) throw err;
    callback(result);
  });
};
