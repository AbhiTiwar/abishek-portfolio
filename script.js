
// typing
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
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// particles (lightweight)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2
    });
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = "white";
        ctx.fill();

        p.y += 0.3;

        if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(draw);
}

draw();


// THEME TOGGLE
function toggleTheme() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// LOAD SAVED THEME
window.onload = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
        document.body.classList.add("light");
    }
};
