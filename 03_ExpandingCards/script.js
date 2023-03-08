let cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => {
   card.addEventListener("click", () => {
      removeactiveclass();
      card.classList.add("active");
   });
});
let removeactiveclass = () => {
   cards.forEach((card) => {
    card.classList.remove("active");
   });
};
