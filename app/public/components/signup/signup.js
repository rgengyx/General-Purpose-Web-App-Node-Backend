$("#signup-form").submit(function(event) {
  event.preventDefault();

  var $inputs = $("#signup-form :input");

  var values = {};
  $inputs.each(function() {
    values[this.name] = $(this).val();
  });

  $.ajax({
    type: "POST",
    url: "http://localhost:5000/signup",
    data: values,
    dataType: "json"
  });
});
