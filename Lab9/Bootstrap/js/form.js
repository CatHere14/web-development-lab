const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;

    let valid = true;

    if (!validateName(name)) {
        document.getElementById("nameError").textContent =
            "Name must be 2-50 characters and contain no numbers.";
        document.getElementById("name").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("name").classList.remove("is-invalid");
    }

    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        document.getElementById("email").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("email").classList.remove("is-invalid");
    }

    if (!validatePassword(password)) {
        document.getElementById("passwordError").textContent =
            "Password must be 8+ characters, contain letters and numbers, and no spaces.";
        document.getElementById("password").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("password").classList.remove("is-invalid");
    }

    if (!validateMessage(message)) {
        document.getElementById("messageError").textContent =
            "Message must be between 10 and 500 characters.";
        document.getElementById("message").classList.add("is-invalid");
        valid = false;
    } else {
        document.getElementById("message").classList.remove("is-invalid");
    }

    if (valid) {
        console.log("Form is valid!");
    }
});