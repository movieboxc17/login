const form = document.getElementById("login-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // TODO: Add validation code and login functionality here

  console.log("Username: ", username);
  console.log("Password: ", password);
});
