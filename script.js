// Select elements
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mainNav = document.getElementById("mainNav");

// Toggle nav on mobile
hamburgerBtn.addEventListener("click", () => {
  mainNav.querySelector("ul").classList.toggle("show-nav");
});
