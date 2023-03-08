let counter = document.querySelectorAll(".counter-text");


counter.forEach((counter) => {
   counter.innerText = "0";
   const counterFunction = () => {
      const target = +counter.getAttribute("data-target");
      let c = +counter.innerText;

      let increment = target / 200;
      if (c < target) {
         counter.innerText = Math.floor(c + increment);

         setTimeout(counterFunction, 1);
      }
   };
   
      
   let test  = () => {
      
   }
   
   counterFunction();
});
