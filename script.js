// Typing effect
const text = ["Full Stack Developer", "CSE Student", "Web Enthusiast"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = text[i];

    if (isDeleting) {
        j--;
    } else {
        j++;
    }

    document.getElementById("typing").textContent =
        current.substring(0, j);

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Theme toggle (simple)
function toggleTheme() {
    document.body.classList.toggle("light");

    // optional: save preference
    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}
