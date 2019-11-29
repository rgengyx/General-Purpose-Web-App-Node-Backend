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

exports.addFriend = function(request, callback) {
  var sql = "INSERT INTO friends (id, friendId, friendUsername) VALUES ?";
  let values = [
    [request.senderId, request.receiverId, request.receiverUsername]
  ];
  con.query(sql, [values], function(err, result) {
    if (err) throw err;
    callback(true);
  });
};

exports.deleteFriend = function(request, callback) {
  var sql =
    "DELETE FROM friends WHERE id = '" +
    request.senderId +
    "' AND friendId = '" +
    request.receiverId +
    "'";
  con.query(sql, function(err, result) {
    if (err) throw err;
    callback(true);
  });
};
