import "./styles.css";
let sidebar = document.querySelector(".sidebar");
let sidebar_button = document.querySelector(".hamburger-menu");
sidebar_button.addEventListener("click", () => {
  sidebar_button.classList.toggle("active");
  sidebar.classList.toggle("active");
});
