let testimonialText = document.querySelector(".text");
let userImage = document.querySelector(".image");
let userName = document.querySelector(".name");
let userRole = document.querySelector(".role");

let index = 1;

let userData = [];

async function getTestimonial() {
  const response = await fetch("https://testimonialapi.toolcarton.com/api");
  const data = await response.json();
  userData = data;
}

getTestimonial();

function updateTestimonial() {
  userName.innerText = userData[index].name;
  userImage.src = userData[index].avatar;
  userRole.innerText = userData[index].designation;
  testimonialText.innerText = userData[index].message;

  index++;
  if (index >= userData.length) {
    index = 1;
  }
}

setInterval(updateTestimonial, 15000);
