const con = require("../config/db");

exports.signup = function(user, callback) {
  var sql = "SELECT * FROM users WHERE email = '" + user.email + "'";
  con.query(sql, function(err, result) {
    if (err) throw err;
    if (result.length > 0) {
      callback("1");
      return;
    } else {
      var sql = "SELECT * FROM users WHERE username = '" + user.username + "'";
      con.query(sql, function(err, result) {
        if (err) throw err;
        if (result.length > 0) {
          callback("2");
          return;
        } else {
          var sql =
            "INSERT INTO users (id, email, username, password) VALUES ?";
          var values = [[user.id, user.email, user.username, user.password]];
          con.query(sql, [values], function(err) {
            if (err) throw err;
            callback("0");
          });
        }
      });
    }
  });
};

exports.login = function(user, callback) {
  var sql = "SELECT * FROM users WHERE email = '" + user.email + "'";

  con.query(sql, function(err, result) {
    if (err) throw err;
    callback(result);
  });
};
