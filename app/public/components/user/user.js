$(".topnav").load("../navbar/navbar.html");
$.getScript("../navbar/navbar.js");
$("head").append(
  '<link rel="stylesheet" href="../navbar/navbar.css" type="text/css" />'
);

var userId = getUrlParamValue("user");

$.ajax({
  type: "POST",
  url: "http://localhost:5000/fetchUserInfo",
  data: { userId: userId },
  dataType: "json",
  success: function(response) {
    var user = response[0];
    $(".username").text(user.username);
    $(".email").text(user.email);
    $(".chat").attr("href", "../chat/chat.html?user=" + user.id);
  }
});
