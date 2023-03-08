let container = document.querySelector(".container");
let ratings = document.querySelectorAll(".rating");
let submitBtn = document.querySelector(".btn");

let selectedFeedback = "Happy";

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    removeActiveClass();

    rating.classList.add("active");
    selectedFeedback = rating.children[1].innerHTML;

    // console.log(selectedFeedback);
  });
});

function removeActiveClass() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}

submitBtn.addEventListener("click", () => {
  container.innerHTML = ` <div class="after-submitted">
  <h1>☺️</h1>
  <h2>Thankyou</h2>
  <strong>Feedback: ${selectedFeedback}</strong>
  <p>
    We'll use your feedback to improve <br />
    our customer support.
  </p>
</div>`;
});
