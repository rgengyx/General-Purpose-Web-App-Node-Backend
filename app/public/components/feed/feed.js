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
        '<div class="title"><a href="">' +
        value.title +
        "</a></div>" +
        '<div class="username"><a href="">' +
        value.username +
        "</a></div>" +
        '<div class="time">' +
        value.time +
        "</div>" +
        '<div class="content">' +
        value.text +
        "</div>" +
        "</div>"
    );
  });
});
