const con = require("../config/db");

exports.fetchChat = function(data, callback) {
  sql =
    "SELECT * FROM chat where (senderId = '" +
    data.senderId +
    "' OR senderId = '" +
    data.receiverId +
    "') AND (receiverId = '" +
    data.receiverId +
    "' OR receiverId = '" +
    data.senderId +
    "') ORDER BY time ASC";
  con.query(sql, function(err, result) {
    if (err) throw err;
    callback(result);
  });
};

exports.storeChat = function(data, callback) {
  var sql =
    "INSERT INTO chat (id, senderId, receiverId, content, time) VALUES ?";
  var values = [
    [data.id, data.senderId, data.receiverId, data.content, data.time]
  ];
  con.query(sql, [values], function(err) {
    if (err) throw err;
    callback(true);
  });
};
