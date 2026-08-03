/* =====================================
   WEDDING DATE
   Change this to your wedding date
===================================== */

const weddingDate = new Date("August 07, 2026 20:30:00").getTime();

/* =====================================
   COUNTDOWN
===================================== */

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("countdown").innerHTML =
        "<h2>🎉 আজ আমাদের বিয়ের দিন 🎉</h2>";

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}

updateCountdown();

setInterval(updateCountdown,1000);


/* =====================================
   GALLERY LIGHTBOX
===================================== */

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src=image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


/* =====================================
   FADE IN ANIMATION
===================================== */

const sections = document.querySelectorAll(".section");

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();


/* =====================================
   SIMPLE CONFETTI
===================================== */

function createConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDelay=Math.random()*3+"s";

        confetti.style.background=
        ["#FFD700","#ff5c8d","#7bd389","#7ec8ff","#ffb347"][Math.floor(Math.random()*5)];

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}

window.onload=createConfetti;


/* =====================================
   BACK TO TOP BUTTON
===================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* =====================================
   RSVP FORM
===================================== */

const form=document.querySelector(".rsvp-form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("ধন্যবাদ ❤️\n\nআপনার RSVP গ্রহণ করা হয়েছে।");

    form.reset();

});
