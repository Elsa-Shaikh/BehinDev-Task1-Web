const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuIcon.setAttribute("class", "ri-menu-line");
});

const bookingType = document.getElementById("bookingType");

bookingType.addEventListener("click", (e) => {
  Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//Header Section Container
ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-container .booking", {
  ...scrollRevealOption,
  delay: 1000,
});

//Service Section Card
ScrollReveal().reveal(".service-card", {
  duration: 1000,
  interval: 500,
});

//Offer Section Card
ScrollReveal().reveal(".offer-card", {
  ...scrollRevealOption,
  interval: 500,
});
