var socket = io.connect();

$("#submit-btn").click(function() {
  socket.emit("send message", $("textarea").val());
  $("textarea").val("");
});

socket.on("new message", function(data) {
  $(".chat-container").append("<div class='message'>" + data.msg + "</div>");
});
