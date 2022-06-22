async function login (event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const pin = document.querySelector('#pin-login').value.trim();

    if (username && pin) {
        const response = await fetch('/api/employees/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                pin
            }),
            headers: { "Content-Type": "application/json"}
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert("Error: Invalid credentials");
        }
    }
};



document.querySelector(".login-form").addEventListener("submit", login);