let bg = document.querySelector(".bg");
let text = document.querySelector(".text");

let load = 0;
let bluring = () => {
    load++
    if(load == 100){
        clearInterval(int);
    }
    text.innerHTML = load + '%';
    text.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

};

let int = setInterval(bluring, 30);
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


