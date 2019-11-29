$(".search").bind("input propertychange", function() {
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/fetchSearchResult",
    data: {
      input: $(".search").val()
    },
    dataType: "json",
    success: function(response) {
      $(".dropdown-container").empty();
      $.each(response, function(index, value) {
        $(".dropdown-container").append(
          "<div class='dropdown'><a href='../user/user.html?user=" +
            value.id +
            "'>" +
            value.username +
            "</a></div>"
        );
      });
    },
    error: function(error) {
      console.log(error);
    }
  });
});
