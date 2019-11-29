$(function() {
  $("#submit-btn").click(function() {
    var title = $("input").val();
    var text = $("textarea").val();

    if (title == "") {
      $("input").val("Title can't be empty");
      return;
    } else if (text == "") {
      $("textarea").val("Content can't be empty");
      return;
    }

    $.ajax({
      type: "POST",
      url: "http://localhost:5000/storeFeed",
      data: JSON.stringify({
        title: title,
        text: text,
        userId: JSON.parse(localStorage.getItem("user")).id,
        username: JSON.parse(localStorage.getItem("user")).username
      }),
      dataType: "json",
      contentType: "application/json",
      success: function(res) {
        location.href = "../feed/feed.html";
      },
      error: function(result) {
        console.log("error");
      }
    });
  });
});
