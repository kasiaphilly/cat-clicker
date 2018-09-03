const wrapper = document.querySelector(".wrapper");
let catNumber = 0;

const allCats = ["Sam", "Bob", "Joe", "Andy", "Tom"];
const allCatPics = ["img/kitten.jpg", "img/kitten2.jpg", "img/kitten3.jpg", "img/kitten4.jpg", "img/kitten5.jpg"];

const catList = document.querySelector(".cats");

function createCatList(){
    for (let i=0; i<allCats.length; i++) {
    const myNewCat = document.createElement("LI");
    myNewCat.classList.add("catName");
    myNewCat.insertAdjacentHTML("afterbegin",
    `${allCats[i]}`);
    catList.appendChild(myNewCat);

    myNewCat.addEventListener('click', function(){
      newCat(allCats[i], allCatPics[i]);
    });
  };
}


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

createCatList();
