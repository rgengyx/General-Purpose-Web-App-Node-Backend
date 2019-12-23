if (localStorage.getItem("user") != undefined) {
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/fetchFriends",
    data: {
      id: JSON.parse(localStorage.getItem("user")).id
    },
    dataType: "json",
    success: function(res) {
      $.each(res, function(index, value) {
        $(".contact-list").append(
          "<div><a href='../user/user.html?user=" +
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
}
