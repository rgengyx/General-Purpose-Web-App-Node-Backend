$(".topnav").load("../navbar/navbar.html");
$.getScript("../navbar/navbar.js");
$("head").append(
  '<link rel="stylesheet" href="../navbar/navbar.css" type="text/css" />'
);

$.ajax({
  type: "GET",
  url: "http://localhost:5000/fetchFeed",
  dataType: "json"
}).done(function(data) {
  $.each(data, function(index, value) {
    $(".feed-container").append(
      '<div class="feed">' +
        '<a class="title" href="">' +
        value.title +
        "</a>" +
        '<div class="content">' +
        value.text +
        "</div>" +
        "</div>"
    );
  });
});
