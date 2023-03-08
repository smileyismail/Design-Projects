console.log(123);
let nav = document.querySelector("nav");
let btn = document.querySelector(".btn");

console.log(nav);
console.log(btn);
console.log("object");

btn.addEventListener("click", () => {
   nav.classList.toggle("active");
});
