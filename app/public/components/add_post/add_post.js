var title = "";
var text = "";

$("#submit-btn").click(function() {
  title = $("input").val();
  text = $("textarea").val();

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/storeFeed",
    data: JSON.stringify({
      title: title,
      text: text
    }),
    dataType: "json",
    contentType: "application/json",
    success: function(result) {
      console.log("ok");
    },
    error: function(result) {
      console.log("error");
    }
  });
});
