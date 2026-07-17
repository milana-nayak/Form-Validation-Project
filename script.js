const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const showPassword = document.getElementById("showPassword");
const strengthText = document.getElementById("strength-text");

// Submit Form
form.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    // Name Validation
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        isValid = false;
    } else {
        showSuccess(nameInput);
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required");
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, "Enter a valid email");
        isValid = false;
    } else {
        showSuccess(emailInput);
    }

    // Phone Validation
    const phonePattern = /^[6-9]\d{9}$/;

    if (phoneInput.value.trim() === "") {
        showError(phoneInput, "Phone number is required");
        isValid = false;
    } else if (!phonePattern.test(phoneInput.value)) {
        showError(phoneInput, "Enter a valid phone number");
        isValid = false;
    } else {
        showSuccess(phoneInput);
    }

    // Password Validation
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must contain at least 6 characters");
        isValid = false;
    } else {
        showSuccess(passwordInput);
    }

    // Confirm Password Validation
    if (confirmPasswordInput.value === "") {
        showError(confirmPasswordInput, "Confirm your password");
        isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
        isValid = false;
    } else {
        showSuccess(confirmPasswordInput);
    }

    // Success
    if (isValid) {

        alert("🎉 Registration Successful!");

        form.reset();

        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("success-border");
            input.classList.remove("error-border");
        });

        document.querySelectorAll(".error").forEach(error => {
            error.innerText = "";
        });

        strengthText.textContent = "Password Strength";
        strengthText.style.color = "black";
    }

});

// Show / Hide Password
showPassword.addEventListener("change", function () {

    if (showPassword.checked) {

        passwordInput.type = "text";
        confirmPasswordInput.type = "text";

    } else {

        passwordInput.type = "password";
        confirmPasswordInput.type = "password";

    }

});

// Password Strength
passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    if (password.length < 6) {

        strengthText.textContent = "🔴 Weak";
        strengthText.style.color = "red";

    }
    else if (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*]/.test(password)
    ) {

        strengthText.textContent = "🟢 Strong";
        strengthText.style.color = "green";

    }
    else {

        strengthText.textContent = "🟡 Medium";
        strengthText.style.color = "orange";

    }

});

// Show Error
function showError(input, message) {

    const error = input.nextElementSibling;

    error.innerText = message;

    input.classList.add("error-border");
    input.classList.remove("success-border");

}

// Show Success
function showSuccess(input) {

    const error = input.nextElementSibling;

    error.innerText = "";

    input.classList.add("success-border");
    input.classList.remove("error-border");

}
