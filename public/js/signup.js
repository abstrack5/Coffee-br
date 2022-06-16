$(document).ready(() => {
    // Getting references to our form and input
    const signUpForm = $("form.signup");
    const employeeName = $("input#empName");
    const pin = $("input#pin");
    const password = $("input#password-input");
  
    // When the signup button is clicked, we validate the employeeName and password are not blank
    signUpForm.on("submit", event => {
      event.preventDefault();
      const userData = {
        employeeName: employeeName.val().trim(),
        password: password.val().trim(),
        pin : pin.val().trim()
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
      $.post("/api/signup", {
        username: username,
        password: password,
        pin: pin    
      })
        .then(() => {
          window.location.replace("/index");
        }).catch(err => {
          console.log(err);
      });
    }

  });
  