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

document.addEventListener("DOMContentLoaded", function () {
  const blackBox = document.querySelector(".black-box");

  function revealOnScroll() {
    const rect = blackBox.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      // Adjust this value if needed
      blackBox.classList.add("show");
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case it's already in view
});
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hide");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.add("hide");
        }
      });
    },
    { threshold: 0.2 } // Adjust this to control when items fade in/out
  );

  items.forEach((item) => observer.observe(item));
});


document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".customer-wrapper"); // The scrollable container
  const slider = document.querySelector(".customer-slider"); // The inner slider
  const leftIcon = document.querySelector(".left-icon");
  const rightIcon = document.querySelector(".right-icon");

  function scrollLeft() {
    const boxWidth = document.querySelector(".customer-box").offsetWidth; // Get the width of one box
    wrapper.scrollBy({ left: -boxWidth, behavior: "smooth" });
  }

  function scrollRight() {
    const boxWidth = document.querySelector(".customer-box").offsetWidth; // Get the width of one box
    wrapper.scrollBy({ left: boxWidth, behavior: "smooth" });
  }

  leftIcon.addEventListener("click", scrollLeft);
  rightIcon.addEventListener("click", scrollRight);
});
