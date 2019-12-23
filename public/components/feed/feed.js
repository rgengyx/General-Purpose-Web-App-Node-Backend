$(".topnav").load("../navbar/navbar.html");
$.getScript("../navbar/navbar.js");
$("head").append(
  '<link rel="stylesheet" href="../navbar/navbar.css" type="text/css" />'
);

$(".contact-list").load("../contactList/contactList.html");
$.getScript("../contactList/contactList.js");
$("head").append(
  '<link rel="stylesheet" href="../contactList/contactList.css" type="text/css" />'
);

$.ajax({
  type: "GET",
  url: "http://localhost:5000/fetchFeed",
  dataType: "json"
}).done(function(data) {
  $.each(data, function(index, value) {
    $(".feed-container").append(
      '<div class="feed">' +
        '<a href="../postPage/postPage.html?post=' +
        value.id +
        '" target="_blank">' +
        "<div class='header'>" +
        "<img src='../../assets/user.png' class='profile-image'/>" +
        '<div class="info-right">' +
        '<div class="username">' +
        value.username +
        "</div>" +
        '<div class="time">' +
        value.time +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='title'>" +
        value.title +
        "</div>" +
        '<div class="content">' +
        value.text +
        "</div>" +
        "</a>" +
        "</div>"
    );
  });
});
