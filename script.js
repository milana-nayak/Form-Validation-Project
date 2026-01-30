const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  clearErrors();

  if (nameInput.value === "") {
    showError(nameInput, "Name is required");
  }

  if (!emailInput.value.includes("@")) {
    showError(emailInput, "Enter a valid email");
  }

  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
  }
});

function showError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.innerText = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(error => error.innerText = "");
}
