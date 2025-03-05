function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".section__text p", { opacity: 0, y: 30, duration: 1, stagger: 0.2 });
  gsap.from(".section__text h1", { opacity: 0, y: 30, duration: 1, delay: 0.4 });
  gsap.from(".btn-container", { opacity: 0, scale: 0.8, duration: 1, delay: 0.6 });
  gsap.from("#socials-container img", { opacity: 0, scale: 0, duration: 1, delay: 0.8, stagger: 0.2 });
});
