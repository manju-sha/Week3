document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.style.display = 'none';
        error.style.opacity = '0';
    });

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    let hasError = false;

    // Validate username
    if (username === '') {
        document.getElementById('username-error').style.display = 'block';
        document.getElementById('username-error').style.opacity = '1';
        hasError = true;
    }

    // Validate password
    if (password === '') {
        document.getElementById('password-error').style.display = 'block';
        document.getElementById('password-error').style.opacity = '1';
        hasError = true;
    }

    // If no errors, you can proceed with form submission or further logic
    if (!hasError) {
        alert('Login successful!'); // Placeholder for successful login action
    }
});
