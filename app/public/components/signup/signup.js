$("#signup-form").submit(function(event) {
  event.preventDefault();

  // Get all inputs and store as values object.
  var values = {};
  $(".text-field").each(function() {
    values[this.name] = $(this).val();
  });

  // Reset form to original every time submit button is clicked.
  $(".text-field").css("border", "1px solid lightgray");
  $(".error").remove();

  // Check if text fields are empty
  $(".text-field").each(function() {
    if (values[this.name] == "") {
      $("#" + this.name + "-field").css("border", "2px solid red");
      if ($("#" + this.name + "-empty").length == 0) {
        $(
          "<div class='error' id='" +
            this.name +
            "-empty'>" +
            this.name.replace(/^\w/, c => c.toUpperCase()) +
            " cannot be empty.</div>"
        ).insertAfter($("#" + this.name + "-field"));
      }
    }
  });

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/signup",
    data: values,
    dataType: "json",
    success: function(res) {
      if (res == "0") {
        location.href = "../feed/feed.html";
      } else if (res == "1") {
        $("#email-field").css("border", "2px solid red");
        if ($("#email-exist").length == 0) {
          $(
            "<div class='error' id='email-exist'>Error: Email already exists.</div>"
          ).insertAfter("#email-field");
        }
      } else if (res == "2") {
        $("#username-field").css("border", "2px solid red");
        if ($("#username-exist").length == 0) {
          $(
            "<div class='error' id='username-exist'>Error: Username already exists.</div>"
          ).insertAfter("#username-field");
        }
      }
    }
  });
});
