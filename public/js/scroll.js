let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("bg");
  } else {
    nav.classList.remove("bg");
  }
});
