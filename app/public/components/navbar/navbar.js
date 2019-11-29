$(".search-bar").load("../searchBar/searchBar.html");
$.getScript("../searchBar/searchBar.js");
$("head").append(
  '<link rel="stylesheet" href="../searchBar/searchBar.css" type="text/css" />'
);

$("#add-post-btn").click(function() {
  location.href = "../add_post/add_post.html";
});

if (localStorage.getItem("user") == undefined) {
  $(".user").html(
    '<a href="../signup/signup.html">Sign up</a>' +
      '<a href="../login/login.html">Log in</a>'
  );
} else {
  $(".user").html(
    "<a href=''>" +
      JSON.parse(localStorage.getItem("user")).username +
      "</a><a href='' class='signout'>Sign Out</a>"
  );
}

$(".signout").click(function() {
  localStorage.clear();
  location.href = "../feed/feed.html";
});
