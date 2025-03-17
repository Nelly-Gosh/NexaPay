document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar-link");
  const sections = document.querySelectorAll(".content-section");
  const menuIcon = document.querySelector(".bars");
  const sidebar = document.querySelector(".sidebar-container");
  menuIcon.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Hide all sections
      sections.forEach((section) => {
        section.classList.add("hidden");
      });

      // Show the selected section
      const sectionId = this.getAttribute("data-section");
      document.getElementById(sectionId).classList.remove("hidden");
    });
  });
});

function copyAccountNumber() {
  let accountNumber = document.getElementById("accountNumber").textContent;
  navigator.clipboard.writeText(accountNumber).then(() => {
    let tooltip = document.getElementById("copyTooltip");
    tooltip.classList.add("show");

    setTimeout(() => {
      tooltip.classList.remove("show");
    }, 1500);
  });
}
