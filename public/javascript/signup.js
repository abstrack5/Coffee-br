$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("#signup-form");
  const employeeName = $("#user-signup");
  const pin = $("#pin-signup");
  const password = $("#password-signup");

  // When the signup button is clicked, we validate the employeeName and password are not blank
  signUpForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      employeeName: employeeName.val().trim(),
      password: password.val().trim(),
      pin: pin.val().trim(),
    };

    if (!userData.username || !userData.password || !userData.pin) {
      return;
    }
    // If we have an employeeName and password, run the signUpUser function
    signUpEmp(userData.username, userData.password, userData.pin);
    employeeName.val("");
    password.val("");
  });

  function signUpEmp(username, password, pin) {
    $.post("/api/employees/signup", {
      username: username,
      password: password,
      pin: pin,
    })
      .then(() => {
        window.location.replace("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
