
// menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// theme toggle
function toggleTheme() {
    document.body.classList.toggle("light");
}

// typing effect
const text = "Full Stack Developer";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();

// scroll reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
