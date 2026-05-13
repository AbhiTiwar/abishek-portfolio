// TYPING EFFECT

const texts = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "React Developer",
    "Backend Engineer"
];

let speed = 100;
const textElements = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {

    if(charIndex < texts[textIndex].length){

        textElements.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, speed);

    } else {

        setTimeout(eraseText, 1500);
    }
}

function eraseText(){

    if(textElements.innerHTML.length > 0){

        textElements.innerHTML =
        textElements.innerHTML.slice(0,-1);

        setTimeout(eraseText,50);

    } else {

        textIndex++;

        if(textIndex >= texts.length){
            textIndex = 0;
        }

        charIndex = 0;

        setTimeout(typeWriter,500);
    }
}

window.onload = typeWriter;


// THEME TOGGLE

function toggleTheme(){

    document.body.classList.toggle("light");

}


// CONTACT FORM

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    document.getElementById("status").innerHTML =
    "✅ Message Sent Successfully!";

    this.reset();
});


// SCROLL REVEAL

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(
    "section, .card, .grid div"
);

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});


// ACTIVE NAV LINK

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach((section)=>{

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((a)=>{

        a.classList.remove("active");

        if(a.getAttribute("href") === "#" + current){
            a.classList.add("active");
        }
    });
});
