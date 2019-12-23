$("#add-post-btn").click(function() {
  location.href = "../addPost/addPost.html";
});

if (localStorage.getItem("user") == undefined) {
  $(".user-container").html(
    '<a href="../signup/signup.html">Sign up</a>' +
      '<a href="../login/login.html">Log in</a>'
  );
} else {
  $(".user-container").html(
    "<a class='user'>" +
      JSON.parse(localStorage.getItem("user")).username +
      "</a>" +
      "<div class='dropdown-container-user'>" +
      "<div>" +
      "<a href='' class='signout'>Sign Out</a>" +
      "</div>" +
      "</div>"
  );
}

$(".signout").click(function() {
  localStorage.clear();
  location.href = "../feed/feed.html";
});

$(document).click(function() {
  $(".dropdown-container").attr("style", "display:none;");
});

$(".user").click(function() {
  $(".dropdown-container-user").attr("style", "display:block;");
});

$(".search").bind("input propertychange", function() {
  if ($(".search").val() == "") {
    $(".dropdown-container").attr("style", "display:none;");
    return;
  }
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/fetchSearchResult",
    data: {
      input: $(".search").val()
    },
    dataType: "json",
    success: function(response) {
      $(".dropdown-container").attr("style", "display:block;");
      $(".dropdown-container").empty();
      $.each(response, function(index, value) {
        $(".dropdown-container").append(
          "<div>" +
            "<img src='../../assets/user.png' class='profile-image-search'/>" +
            "<a href='../user/user.html?user=" +
            value.id +
            "'>" +
            value.username +
            "</a>" +
            "</div>"
        );
      });
    },
    error: function(error) {
      console.log(error);
    }
  });
});
