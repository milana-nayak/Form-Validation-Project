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
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (emailInput.value.trim() === "") {
  showError(emailInput, "Email is required");
  isValid = false;
} else if (!emailInput.value.match(emailPattern)) {
  showError(emailInput, "Enter a valid email");
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

  input.classList.add("error-border");
  input.classList.remove("success-border");
}

function showSuccess(input) {
  const error = input.nextElementSibling;
  error.innerText = "";

  input.classList.add("success-border");
  input.classList.remove("error-border");
}
