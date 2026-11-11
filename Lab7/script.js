const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
const flipButton = document.getElementById("flip-button");

flipButton.addEventListener("click", function () {
    document.body.classList.toggle("flip-all");
});
