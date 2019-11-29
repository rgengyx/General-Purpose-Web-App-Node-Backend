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
    $(".chat").attr("href", "../chat/chat.html?user=" + user.id);
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
        $(".friend-request").html(
          "<button class='delete-friend'>Remove Friend</button>"
        );
        return;
      }
    }
    $(".friend-request").html("<button class='add-friend'>Add Friend</button>");
  }
});

$(".friend-request").on("click", ".add-friend", function() {
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
      $(".friend-request").html(
        "<button class='delete-friend'>Remove Friend</button>"
      );
    },
    error: function(result) {
      console.log(result);
    }
  });
});

$(".friend-request").on("click", ".delete-friend", function() {
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/deleteFriend",
    data: {
      senderId: JSON.parse(localStorage.getItem("user")).id,
      receiverId: userId
    },
    dataType: "json",
    success: function(response) {
      $(".friend-request").html(
        "<button class='add-friend'>Add Friend</button>"
      );
    },
    error: function(result) {
      console.log(result);
    }
  });
});
