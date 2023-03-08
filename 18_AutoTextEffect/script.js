let textEl = document.querySelector(".text");
let speedEl = document.getElementById("speed");

let text = "I am a Full-stack Web Developer";

let index = 1;
let speed = 300;

function writeText() {
  textEl.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }

  setTimeout(writeText, speed);
}

writeText();

speedEl.addEventListener("change", (e) => {
  speed = 300 / e.target.value;
});
