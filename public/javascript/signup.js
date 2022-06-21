async function signup (event) {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();
  const pin = document.querySelector('#pin').value.trim();

  if (username && email && password) {
      const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
              username,
              password,
              pin
          }),
          headers: { "Content-Type": "application/json"}
      });

      if (response.ok) {
          console.log("Success!");
          document.location.replace('/dashboard');
      } else {
          alert("Error: Inappropriate input values. ");
      }
  }
};



document.querySelector(".signup-form").addEventListener("submit", signup);