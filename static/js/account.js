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

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const accountItems = document.querySelectorAll(".account-item");

  function checkScroll() {
    const triggerPoint = window.innerHeight * 0.9; // Trigger when 90% of viewport height is reached

    accountItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerPoint) {
        setTimeout(() => {
          item.classList.add("show");
        }, index * 200); // Delay each item for a smooth staggered effect
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on page load in case items are already in view
});
