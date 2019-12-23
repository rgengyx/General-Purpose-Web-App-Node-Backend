const con = require("../config/db");

exports.fetchFeed = function(callback) {
  sql = "SELECT * FROM feed ORDER BY time DESC";
  con.query(sql, function(err, result) {
    if (err) throw err;
    callback(result);
  });
};

exports.fetchPost = function(post, callback) {
  var sql = "SELECT * FROM feed WHERE id = '" + post.id + "'";
  con.query(sql, function(err, result) {
    if (err) throw err;
    callback(result);
  });
};

exports.storeFeed = function(post, callback) {
  var sql =
    "INSERT INTO feed (id, title, text, userId, username, time) VALUES ?";
  var values = [
    [post.id, post.title, post.text, post.userId, post.username, post.time]
  ];
  con.query(sql, [values], function(err) {
    if (err) throw err;
    callback(true);
  });
};
