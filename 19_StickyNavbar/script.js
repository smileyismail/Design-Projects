let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight + 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
    s;
  }
});
