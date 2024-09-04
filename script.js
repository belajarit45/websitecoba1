const userData = {}; // Simulating GitHub storage as an in-memory object

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const whatsapp = document.getElementById('whatsapp').value;

    if (!username || !password || !whatsapp) {
        document.getElementById('error-message').innerText = 'All fields are required!';
        return;
    }

    if (userData[username]) {
        document.getElementById('error-message').innerText = 'Username already exists!';
    } else {
        userData[username] = { password, whatsapp };
        document.getElementById('error-message').innerText = 'Registration successful!';
    }
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        document.getElementById('login-error-message').innerText = 'Both fields are required!';
        return;
    }

    if (userData[username] && userData[username].password === password) {
        document.getElementById('login-error-message').innerText = 'Login successful!';
        // Redirect to the main page or dashboard
    } else {
        document.getElementById('login-error-message').innerText = 'Invalid username or password!';
    }
});
