var title = "";
var text = "";

$("#submit-btn").click(function() {
  title = $("input").val();
  text = $("textarea").val();

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
      text: text
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
