// =========================
// Typing Effect
// =========================

const words = [
    "Full Stack Developer",
    "CSE Student",
    "Web Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    document.getElementById("typing").textContent =
        currentWord.substring(0, charIndex);

    // Typing complete
    if (!isDeleting && charIndex === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1000);
        return;
    }

    // Deleting complete
    if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// =========================
// Theme Toggle
// =========================

// Load saved theme
window.onload = function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
};

// Toggle theme function
function toggleTheme() {

    document.body.classList.toggle("dark");

    // Save theme
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
