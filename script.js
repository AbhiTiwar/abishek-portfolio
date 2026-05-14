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

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const status = document.getElementById("status");
    status.textContent = "Sending...";

    emailjs.sendForm(
        "service_hpoxirp",
        "template_8nucipi",
        this
    )
    .then(() => {

        status.textContent = "Message sent successfully ✅";
        this.reset();

        setTimeout(() => {
            status.textContent = "";
        }, 3000);

    })
    .catch((error) => {

        status.textContent = "Failed to send message ❌";
        console.log(error);

    });

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

function toggleTheme(){
    document.body.classList.toggle("light");
}



// LOAD SAVED THEME
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
}

function toggleTheme(){

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
    } else {
        localStorage.setItem("theme","dark");
    }
}



// MOBILE MENU

const menuToggle =
document.getElementById("menu-toggle");

const navbar =
document.getElementById("navbar");

menuToggle.addEventListener("click",()=>{

    navbar.classList.toggle("active");

});

// CLOSE MENU AFTER CLICK

document.querySelectorAll("nav a")
.forEach(link => {

    link.addEventListener("click", ()=>{

        navbar.classList.remove("active");

    });

});
