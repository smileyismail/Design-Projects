let btns = document.querySelectorAll(".btn");
let faqs = document.querySelectorAll(".faq-container");

btns.forEach((btn) => {
   btn.addEventListener("click", () => {
      btn.parentNode.parentNode.classList.toggle("active");
   });
});
