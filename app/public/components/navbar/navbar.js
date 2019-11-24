$("#add-post-btn").click(function() {
  location.href = "../add_post/add_post.html";
});

console.log(JSON.parse(localStorage.getItem("user")));
if (localStorage.getItem("user") == undefined) {
  $(".user").html(
    '<a href="../signup/signup.html">Sign up</a><a href="../login/login.html">Log in</a>'
  );
} else {
  $(".user").html(
    "<a href=''>" + JSON.parse(localStorage.getItem("user")).username + "</a>"
  );
}
