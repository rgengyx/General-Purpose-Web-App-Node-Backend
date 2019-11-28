const con = require("../config/db");

exports.fetchFriends = function(user, callback) {
  var sql = "SELECT * FROM friends WHERE id = '" + user.id + "'";
  con.query(sql, function(err, result) {
    if (err) throw err;
    callback(result);
  });
};

exports.fetchUserInfo = function(user, callback) {
  var sql = "SELECT * FROM users WHERE id = '" + user.userId + "'";
  con.query(sql, function(err, result) {
    if (err) throw err;
    callback(result);
  });
};
