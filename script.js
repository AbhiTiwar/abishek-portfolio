
// mobile menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// typing effect
const text = "Full Stack Web Developer";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();

// scroll animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade").forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
