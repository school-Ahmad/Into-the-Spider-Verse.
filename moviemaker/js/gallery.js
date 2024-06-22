document.addEventListener("DOMContentLoaded", () => {
  let nextButton = document.getElementById("next");
  let prevButton = document.getElementById("prev");
  let carousel = document.querySelector(".carousel");
  let listHTML = document.querySelector(".carousel .list");
  let seeMoreButtons;
  let backButton = document.getElementById("back");

  const fetchData = async () => {
    try {
      const response = await fetch("../js/characters.json");
      const characters = await response.json();
      populateCarousel(characters);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };

  const populateCarousel = (characters) => {
    listHTML.innerHTML = "";
    characters.forEach((character) => {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `
        <img src="${character.image}">
        <div class="introduce">
          <div class="title">${character.actor}</div>
          <div class="topic">${character.alias}</div>
          <div class="des">${character.shortDescription}</div>
          <button class="seeMore">Bekijk meer &#8599</button>
        </div>
        <div class="detail">
          <div class="title">${character.alias}</div>
          <div class="des">${character.longDescription}</div>
        </div>
      `;
      listHTML.appendChild(item);
    });

    seeMoreButtons = document.querySelectorAll(".seeMore");
    addEventListeners();
  };

  const addEventListeners = () => {
    nextButton.onclick = function () {
      showSlider("next");
    };
    prevButton.onclick = function () {
      showSlider("prev");
    };

    seeMoreButtons.forEach((button) => {
      button.onclick = function () {
        carousel.classList.remove("next", "prev");
        carousel.classList.add("showDetail");
        backButton.style.display = "inline";
        // Hide next and prev buttons
        nextButton.style.display = "none";
        prevButton.style.display = "none";
      };
    });

    backButton.onclick = function () {
      carousel.classList.remove("showDetail");
      backButton.style.display = "none";
      // Show next and prev buttons again
      nextButton.style.display = "inline";
      prevButton.style.display = "inline";
    };
  };

  let unAcceppClick;
  const showSlider = (type) => {
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";

    carousel.classList.remove("next", "prev");
    let items = document.querySelectorAll(".carousel .list .item");
    if (type === "next") {
      listHTML.appendChild(items[0]);
      carousel.classList.add("next");
    } else {
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add("prev");
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
      nextButton.style.pointerEvents = "auto";
      prevButton.style.pointerEvents = "auto";
    }, 2000);
  };

  fetchData();
});
