const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toogleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("sun.svg")) {
        toggleIcon.src = "assets/icons/moon.svg";
        toogleText.textContent = "Dark mode";
    } else {
        toggleIcon.src = "assets/icons/sun.svg";
        toogleText.textContent = "Light mode";
    }
});

toggleColors.addEventListener("click", (e) => {
    if (e.target.dataset.color) {rootStyles.setProperty("--primary-color", e.target.dataset.color);};
});