const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message").value;

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(message);
});