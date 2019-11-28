const con = require("../config/db");

exports.verifyEmail = function(user, callback) {
  var sql = "SELECT * FROM users WHERE email = '" + user.email + "'";
  con.query(sql, function(err, result) {
    if (err) throw err;
    return callback(result);
  });
};

exports.verifyUsername = function(user, callback) {
  var sql = "SELECT * FROM users WHERE username = '" + user.username + "'";
  con.query(sql, function(err, result) {
    if (err) throw err;
    return callback(result);
  });
};

exports.storeUser = function(callback) {
  var sql = "INSERT INTO users (id, email, username, password) VALUES ?";
  var values = [[user.id, user.email, user.username, user.password]];
  con.query(sql, [values], function(err) {
    if (err) throw err;
    return callback();
  });
};
