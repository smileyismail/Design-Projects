let progress = document.getElementById("progress-bar");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let circles = document.querySelectorAll(".circle");

let activated = 1;

next.addEventListener("click", () => {
   activated++;
   if (activated > circles.length) {
      activated = circles.length;
   }
   update();
});
prev.addEventListener("click", () => {
   activated--;
   if (activated < 1) {
      activated = 1;
   }
   update();
});

let update = () => {
   circles.forEach((circle, idx) => {
      if (idx < activated) {
         circle.classList.add("active");
      } else {
         circle.classList.remove("active");
      }
   });
   console.log(circles.length);
   let actives = document.querySelectorAll(".active");
   progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";


   if (activated === 1) {
      prev.disabled = true;
   }else if(activated === circles.length){
        next.disabled = true;
   }else{
       prev.disabled = false;
       next.disabled = false;
   }
};
