"use strict";
//NAV TOGGLE
document.addEventListener("DOMContentLoaded", ()=> {
  const header = document.querySelector(".header");
  const btnNav = document.querySelector(".mobile-nav");
  const navLinks = document.querySelectorAll(".header__link");

  //TOGGLE NAV
  btnNav.addEventListener('click', ()=> {
    header.classList.toggle('nav-open');
     console.log("button clicked");
  });

  //close nav when a link is clicked
  navLinks.forEach((link)=> {
    link.addEventListener('click',()=> {
      header.classList.toggle("nav-open");
    });
  });

  //close when clicking outside
  document.addEventListener('click', (e) => {
    if(!header.contains(e.target) && header.classList.contains('nav-open')) {
      header.classList.remove('nav-open');
    }
  }); 
});

//FADE INS
 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(
  '.fade-up, .fade-left, .fade-right, .zoom-in, .rotate-in, .fade-blur, .rise, .stagger'
).forEach(el => observer.observe(el));



//SCROLL TO TOP
const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", ()=> {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  }else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener('click', ()=> {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
});