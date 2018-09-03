let clicks = 0;

let cat1 = "Bob";
let cat2 = "Sam";


const image = document.querySelector(".cat-image");
const clickCounter = document.querySelector(".click-counter");

image.addEventListener('click', function(){
  clicks++;
  clickCounter.innerHTML = `Number of clicks: ${Number(clicks)}`
}, false);
