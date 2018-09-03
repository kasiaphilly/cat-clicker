const wrapper = document.querySelector(".wrapper");
let catNumber = 0;

// function creating a cat div
function newCat(name, image) {
    const catCard = document.createElement("DIV");
    catCard.classList.add("cat-box");
    catCard.classList.add(name);
    let catImage = image;
    let catName = name;
    let clicks = 0;
    catCard.insertAdjacentHTML("afterbegin", `
        <h3 class="name">${name}</h3>
        <div class = "cat-image">
          <img class = "kitten" "cat${catNumber}" src="${image}" alt="cat picture">
        </div>
        <div class = "click-counter">
          Number of clicks: ${clicks}
        </div>`);
    wrapper.appendChild(catCard);
    catNumber++

    let clickCounter = catCard.querySelector("div.click-counter");
    let catPic = catCard.querySelector("div.cat-imege");

    catCard.addEventListener('click', function(){
      clicks++;
      clickCounter.innerHTML = `Number of clicks: ${Number(clicks)}`
    }, false);
  }

newCat ("sam", "img/kitten.jpg");
newCat ("bob", "img/kitten2.jpg");
