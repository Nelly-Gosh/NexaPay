// nav bar js
const navbarLinks = document.getElementById("navbar-links");
const menuIcon = document.getElementById("bars");
const closeIcon = document.getElementById("close");
menuIcon.addEventListener("click", () => {
  navbarLinks.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
