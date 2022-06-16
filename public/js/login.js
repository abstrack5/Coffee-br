$(document).ready(() => {
    const loginForm = $('#login-form');
    const email = $('#username');
    const password = $('#password');

    loginForm.on('submit', event => {
        event.preventDefault();
        const userObj = {
            userName: email.val().trim(),
            password: password.val().trim()
        };

        if (!userObj.userName || !userObj.password) {
            return;
        }

        login(userObj.userName, userObj.password);
        email.val('');
        password.val('');
    })

    function login(username, password) {
        $.post('/api/login', {
            username: username,
            password: password
        }).then(() => {
            window.location.replace('/index')
        }).catch(err => {
            console.log(err);
        });
    }

})