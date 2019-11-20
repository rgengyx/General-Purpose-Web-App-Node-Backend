document.getElementById("add-post-btn").onclick = function() {
  location.href = "../add_post/add_post.html";
};

$.ajax({
  type: "GET",
  url: "http://localhost:5000/fetchFeed",
  dataType: "json"
}).done(function(data) {
  $.each(data, function(index, value) {
    $(".feed-container").append(
      '<div class="feed">' +
        '<div class="title">' +
        value.title +
        "</div>" +
        '<div class="content">' +
        value.text +
        "</div>" +
        "</div>"
    );
  });
});
