let checkboxes = document.querySelectorAll(".checkboxes input");
let male = document.getElementById("male");
let female = document.getElementById("female");
let other = document.getElementById("other");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    let box = e.target;
    if (box === male) {
      female.checked = false;
      other.checked = false;
    }
    if (box === female) {
      male.checked = false;
      other.checked = false;
    }
    if (box === other) {
      female.checked = false;
      male.checked = false;
    }
  });
});
