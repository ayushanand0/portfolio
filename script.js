function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var typeData = new Typed(".role", {
    strings: [
      "Software Developer",
      "Web Developer",
      "Coder!",
      "AI Enthusiast",
      "AR Creator",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });
});
