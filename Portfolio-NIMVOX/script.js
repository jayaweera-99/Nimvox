/*-------------scroll section active link----*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset & top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');

      })
    }
  })
}
/*-----------toggle menu--------*/
const navbar = document.getElementById("navbar");
const menuIcon = document.getElementById("menu_icon");
const closeMenu = document.getElementById("menu_close");

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show')
});
closeMenu .addEventListener('click', () => {
  navbar.classList.remove('show')
});



/* Home parallax section*/

const parallaxElements = document.querySelectorAll('.parallax');
const home = document.querySelector('.home'); 
let xValue = 0;
let yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
  parallaxElements.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation; 

    let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = cursorPosition - parseFloat(getComputedStyle(el).left) * isInLeft * 0.1;
    
    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2800px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg) `;
    

  });
}
update(0)

window.addEventListener("mousemove", (e) => {
if(timeline.isActive()) return;

  xValue = (e.clientX - window.innerWidth / 2);
  yValue = (e.clientY - window.innerHeight / 2); 

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

update(e.clientX)
});

if(window.innerWidth >= 725){
  home.style.maxheight =`${window.innerWidth * 0.6}px `
}else{
  home.style.maxheight =`${window.innerWidth * 1.6}px `
}

/* GSAP animation*/
let timeline = gsap.timeline();

Array.from(parallaxElements)
  .filter(el => !el.classList.contains("text"))
  .forEach(el => {
    timeline.from(el, {
      top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
      duration: 3,
      ease: "power3.out",
    },
    "1"
    );
  });
  timeline.from(".hide", {
    opacity: 0,
    duration: 1.5,
  }, "2");
 /*------ projects slider-------*/
// Existing next and prev button event listeners
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener('click', function(){
   let items = document.querySelectorAll(".item");
   document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
});

/*---contact container function---*/
const container = document.getElementById('container');
const followBtn = document.getElementById('follow_us');
const contactBtn = document.getElementById('Contact_us');

followBtn.addEventListener('click', () => {
  container.classList.add("active");
});

contactBtn.addEventListener('click', () => {
  container.classList.remove("active");
});

/*---typing function---*/

document.addEventListener('DOMContentLoaded', function() {
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UX/UI designer', 'Graphic Designer', 'App designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});



