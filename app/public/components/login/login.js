$("#login-form").submit(function(event) {
  event.preventDefault();

  var $inputs = $("#login-form :input");

  var values = {};
  $inputs.each(function() {
    values[this.name] = $(this).val();
  });

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/login",
    data: values,
    dataType: "json",
    success: function(res) {
      if (res == true) {
        location.href = "../feed/feed.html";
      } else {
        $("body").append("<div class='message'>unsuccess</div>");
      }
    }
  });
});
