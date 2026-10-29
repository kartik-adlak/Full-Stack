
const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const passwordError = document.getElementById("passwordError");

    const confirmError = document.getElementById("confirmError");

    const successMessage = document.getElementById("successMessage");

    let isValid = true;

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    successMessage.textContent = "";

    // Name validation
    if (username === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else if (username.length < 3) {
        nameError.textContent = "Minimum 3 characters required";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "Minimum 8 characters required";
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        passwordError.textContent = "Include at least one number";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === "") {
        confirmError.textContent = "Please confirm password";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    // Final validation
    if (isValid === true) {
        successMessage.textContent = "Form validated successfully!";
        console.log("All fields are valid");
    }

});
