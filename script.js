
// typing effect
const text = "Full Stack Developer";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}
type();

// theme toggle
function toggleTheme() {
    document.body.classList.toggle("light");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light") ? "light" : "dark"
    );
}

// load theme
window.onload = () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
    }
};

// fake form handler (ready for EmailJS upgrade)
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("status").innerText =
        "Message sent successfully (demo mode)";
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.1)";
        nav.style.backdropFilter = "blur(15px)";
    } else {
        nav.style.background = "white";
    }
});





// smooth reveal with better timing
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "0.8s ease";
        }
    });
});

document.querySelectorAll("section").forEach((sec) => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    observer.observe(sec);
});
