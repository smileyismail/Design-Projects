let sounds = [
   "correct",
   "doorbell",
   "fluit",
   "magic",
   "ppopup",
   "sci-fi",
   "wrong",
];

sounds.forEach((sound) => {
   let button = document.createElement("button");
   button.classList.add("btn");
   button.innerText = sound;

   button.addEventListener("click", () => {
      stopSound();

      document.getElementById(sound).play();
   });

   document.querySelector(".buttons").appendChild(button);
});
function stopSound(){
    sounds.forEach((sound)=>{
        let song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}