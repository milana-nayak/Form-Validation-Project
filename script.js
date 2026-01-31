const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // ⛔ stop page reload

  let isValid = true;

  // NAME validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  } else {
    showSuccess(nameInput);
  }

  // EMAIL validation
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    isValid = false;
  } else {
    showSuccess(emailInput);
  }

  // PASSWORD validation
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  } else {
    showSuccess(passwordInput);
  }

  // FINAL success
  if (isValid) {
    alert("Registration Successful 🎉");
    form.reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
  error.style.color = "red";
}

function showSuccess(input) {
  const error = input.nextElementSibling;
  error.innerText = "";
}

