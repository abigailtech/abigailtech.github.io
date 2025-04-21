document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  if (currentPage === "index.html") {
      document.getElementById("home-link").classList.add("active");
  } else if (currentPage === "about.html") {
      document.getElementById("about-link").classList.add("active");
  } else if (currentPage === "project.html") {
      document.getElementById("project-link").classList.add("active");
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});