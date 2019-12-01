$(".topnav").load("../navbar/navbar.html");
$.getScript("../navbar/navbar.js");
$("head").append(
  '<link rel="stylesheet" href="../navbar/navbar.css" type="text/css" />'
);

var userId = getUrlParamValue("user");
var username;

$.ajax({
  type: "POST",
  url: "http://localhost:5000/fetchUserInfo",
  data: { userId: userId },
  dataType: "json",
  success: function(response) {
    var user = response[0];
    username = user.username;
    $(".username").text(username);
    $(".email").text(user.email);
    $(".chat").bind("click", function() {
      location.href = "../chat/chat.html?user=" + user.id;
    });
  }
});

$.ajax({
  type: "POST",
  url: "http://localhost:5000/fetchFriends",
  data: {
    id: JSON.parse(localStorage.getItem("user")).id
  },
  dataType: "json",
  success: function(response) {
    for (var i = 0; i < response.length; i++) {
      if (response[i].friendId == userId) {
        removeFriend();
        return;
      }
    }
    addFriend();
  }
});

function removeFriend() {
  $("#friend-request")
    .addClass("delete-friend")
    .text("Remove Friend")
    .removeClass("add-friend");

  $("#friend-request").unbind();
  $("#friend-request").bind("click", function() {
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/deleteFriend",
      data: {
        senderId: JSON.parse(localStorage.getItem("user")).id,
        receiverId: userId
      },
      dataType: "json",
      success: function(response) {
        addFriend();
      },
      error: function(result) {
        console.log(result);
      }
    });
  });
}

function addFriend() {
  $("#friend-request")
    .addClass("add-friend")
    .text("Add Friend")
    .removeClass("delete-friend");

  $("#friend-request").unbind();
  $("#friend-request").bind("click", function() {
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/addFriend",
      data: {
        senderId: JSON.parse(localStorage.getItem("user")).id,
        receiverId: userId,
        receiverUsername: username
      },
      dataType: "json",
      success: function(response) {
        removeFriend();
      },
      error: function(result) {
        console.log(result);
      }
    });
  });
}
