
// TYPE EFFECT
const text="Full Stack Developer";
let i=0;

function type(){
    if(i<text.length){
        document.getElementById("typing").innerHTML+=text.charAt(i);
        i++;
        setTimeout(type,80);
    }
}
type();

// THEME
function toggleTheme(){
    document.body.classList.toggle("light");
}

// CURSOR
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
});

// REVEAL
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
