// select elements
let menu = document.querySelector(".menu-icon");
let span = document.querySelectorAll(".menu-icon span");
let content = document.querySelector('.menu-content');
let out = document.querySelector('#out')

// Add active class
span.forEach((e) => {
  menu.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});
menu.addEventListener("click", () => {
  content.classList.toggle("active");
});

// Close the browser window
out.onclick = () => {
  window.close();
};
