values = {
  id: JSON.parse(localStorage.getItem("user")).id
};

$.ajax({
  type: "POST",
  url: "http://localhost:5000/fetchFriends",
  data: JSON.stringify(values),
  dataType: "json",
  contentType: "application/json",
  success: function(res) {
    $.each(res, function(index, value) {
      $(".contact-list").append(
        "<div><a href='../chat/chat.html?user=" +
          value.friendId +
          "'>" +
          value.friendUsername +
          "</a></div>"
      );
    });
  },
  error: function(result) {
    console.log("error", result);
  }
});
