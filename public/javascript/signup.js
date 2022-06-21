async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  const pin = document.querySelector("#pin").value.trim();

  if (username && password && pin) {
    const response = await fetch("/api/employees", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
        pin,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
