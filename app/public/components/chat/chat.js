var socket = io.connect();

var userId = JSON.parse(localStorage.getItem("user")).id;
var receiverId = getUrlParamValue("user");

$.ajax({
  type: "POST",
  url: "http://localhost:5000/fetchUserInfo",
  data: { userId: receiverId },
  dataType: "json",
  success: function(res) {
    $(".receiver").text(res[0].username);
  },
  error: function(result) {
    console.log(result);
  }
});

$("#send-btn").click(function() {
  var data = {
    senderId: userId,
    receiverId: receiverId,
    content: $("textarea").val()
  };

  socket.emit("send message", data);

  // Reset input field
  $("textarea").val("");

  $(".message-container").append(
    "<div class='message-sent-container'>" +
      "<div class='message-sent'>" +
      data.content +
      "</div>" +
      "<img src='../../assets/user.png' class='chat-profile-image'>" +
      "</div>"
  );
  scrollToBottom(".message-container");
});

socket.on("new message", function(data) {
  if (data.receiverId == userId) {
    $(".message-container").append(
      "<div class='message-received-container'>" +
        "<img src='../../assets/user.png' class='chat-profile-image'>" +
        "<div class='message-received'>" +
        data.content +
        "</div>" +
        "</div>"
    );
  }
  scrollToBottom(".message-container");
});

// Load chat history
$.ajax({
  type: "POST",
  url: "http://localhost:5000/fetchChatHistory",
  data: JSON.stringify({
    receiverId: receiverId,
    senderId: userId
  }),
  dataType: "json",
  contentType: "application/json",
  success: function(res) {
    $.each(res, function(index, value) {
      if (value.receiverId == userId) {
        $(".message-container").append(
          "<div class='message-received-container'>" +
            "<img src='../../assets/user.png' class='chat-profile-image'>" +
            "<div class='message-received'>" +
            value.content +
            "</div>" +
            "</div>"
        );
      } else {
        $(".message-container").append(
          "<div class='message-sent-container'>" +
            "<div class='message-sent'>" +
            value.content +
            "</div>" +
            "<img src='../../assets/user.png' class='chat-profile-image'>" +
            "</div>"
        );
      }
    });
    scrollToBottom(".message-container");
  },
  error: function(result) {
    console.log(result);
  }
});

function scrollToBottom(div) {
  $(div).scrollTop($(".message-container")[0].scrollHeight);
}
