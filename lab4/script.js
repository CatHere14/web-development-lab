// Lab 6: Change the page colors when the theme button is clicked.
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Lab 6: Flip all anime cards when the flip button is clicked.
const flipButton = document.getElementById("flip-button");

flipButton.addEventListener("click", function () {
    document.body.classList.toggle("flip-all");
});
