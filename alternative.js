// function creating a cat div
function newCat(name, image) {
    const catCard = document.createElement("DIV");
    catCard.classList.add("cat-box");
    catCard.classList.add(name);
    let catImage = image;
    let catName = name;
    catCard.insertAdjacentHTML("afterbegin", `
        <h3 class="name">${name}</h3>
        <div class = "cat-image">
          <img class = "kitten" "${name}" src="${image}" alt="cat picture">
        </div>
        <div class = "click-counter">
          Number of clicks: 0
        </div>`);
    wrapper.appendChild(catCard);
  }


newCat ("sam", "img/kitten.jpg");
newCat ("bob", "img/kitten2.jpg");
