const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const showPassword = document.getElementById("showPassword");

// Submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    // Name
    if(nameInput.value.trim()===""){
        showError(nameInput,"Name is required");
        isValid=false;
    }else{
        showSuccess(nameInput);
    }

    // Email
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailInput.value.trim()===""){
        showError(emailInput,"Email is required");
        isValid=false;
    }
    else if(!emailPattern.test(emailInput.value)){
        showError(emailInput,"Enter valid email");
        isValid=false;
    }
    else{
        showSuccess(emailInput);
    }

    // Phone
    const phonePattern=/^[6-9]\d{9}$/;

    if(phoneInput.value.trim()===""){
        showError(phoneInput,"Phone number is required");
        isValid=false;
    }
    else if(!phonePattern.test(phoneInput.value)){
        showError(phoneInput,"Enter valid phone number");
        isValid=false;
    }
    else{
        showSuccess(phoneInput);
    }

    // Password
    if(passwordInput.value.length<6){
        showError(passwordInput,"Password must contain at least 6 characters");
        isValid=false;
    }
    else{
        showSuccess(passwordInput);
    }

    // Confirm Password
    if(confirmPasswordInput.value===""){
        showError(confirmPasswordInput,"Confirm your password");
        isValid=false;
    }
    else if(confirmPasswordInput.value!==passwordInput.value){
        showError(confirmPasswordInput,"Passwords do not match");
        isValid=false;
    }
    else{
        showSuccess(confirmPasswordInput);
    }

    if(isValid){
        alert("🎉 Registration Successful!");
        form.reset();

        document.querySelectorAll("input").forEach(input=>{
            input.classList.remove("success-border");
        });
    }

});

// Show Password
showPassword.addEventListener("change",function(){

    if(showPassword.checked){

        passwordInput.type="text";
        confirmPasswordInput.type="text";

    }else{

        passwordInput.type="password";
        confirmPasswordInput.type="password";

    }

});

// Error
function showError(input,message){

    const error=input.nextElementSibling;

    error.innerText=message;

    input.classList.add("error-border");
    input.classList.remove("success-border");

}

// Success
function showSuccess(input){

    const error=input.nextElementSibling;

    error.innerText="";

    input.classList.add("success-border");
    input.classList.remove("error-border");

}
