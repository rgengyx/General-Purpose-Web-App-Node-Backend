var postId = getUrlParamValue("post");

$.ajax({
  type: "POST",
  url: "http://localhost:5000/fetchPost",
  data: {
    id: postId
  },
  dataType: "json",
  success: function(response) {
    var post = response[0];
    $(".title").text(post.title);
    $(".username").text(post.username);
    $(".time").text(post.time);
    $(".content").text(post.text);
  }
});
