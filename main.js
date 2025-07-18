// Mobile Navigation Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

navLinks.addEventListener("click", (e) => {
  // Optional: Only close if user clicked a link
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
  }
});

// ScrollReveal Animations
const scrollRevealOptions = {
  distance: "50px",
  duration: 1000,
  easing: "ease",
  origin: "bottom",
  reset: false
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
  delay: 300,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOptions,
  delay: 600,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOptions,
  delay: 900,
});

ScrollReveal().reveal(".special__card", {
  ...scrollRevealOptions,
  interval: 200,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOptions,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOptions,
  delay: 300,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOptions,
  delay: 600,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOptions,
  delay: 900,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOptions,
  interval: 300,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOptions,
  delay: 300,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOptions,
  delay: 600,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOptions,
  delay: 900,
  interval: 300,
});

// ScrollReveal
setTimeout(() => {
  ScrollReveal().reveal(".client__slide-initial .client__card", {
    distance: "50px",
    duration: 1000,
    easing: "ease-out",
    interval: 300,
  });
}, 300);

// Swiper 
const swiper = new Swiper(".client__swiper", {
  loop: true,
  speed: 1000,
  autoplay: true, 
  effect: "slide", 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

