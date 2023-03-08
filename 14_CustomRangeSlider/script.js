let range = document.querySelector("#slider");
let label = document.querySelector("label");

range.addEventListener("input", (e) => {
  let value = e.target.value;
  label.innerHTML = value;

  let range_width = range.offsetWidth;
  let label_width = label.offsetWidth;

  console.log(range_width, label_width);
});
