document.getElementById("myForm").addEventListener("submit", function(event) {
    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmError").innerText = "";
    document.getElementById("ageError").innerText = "";

    // 1. Name Validation
    let name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    // 2. Email Validation
    let email = document.getElementById("email").value;
    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").innerText = "Please enter a valid email";
        isValid = false;
    }

    // 3. Password Validation
    let password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters";
        isValid = false;
    }

    // 4. Confirm Password Validation
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmError").innerText = "Passwords don't match";
        isValid = false;
    }

    // 5. Age Validation
    let age = document.getElementById("age").value;
    if (age === "" || age <= 0) {
        document.getElementById("ageError").innerText = "Please enter a valid age";
        isValid = false;
    }

    // Stop form submission if invalid
    if (!isValid) {
        event.preventDefault();
    }
});