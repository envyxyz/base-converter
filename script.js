let theme_button = document.querySelector(".theme_btn");

theme_button.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
  theme_button.classList.toggle("active");
});
