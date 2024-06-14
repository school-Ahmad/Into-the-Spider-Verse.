let characters = [
  {
    name: "joe mama",
    strength: 50,
    speed: 55,
    img: "",
  },
  {
    name: "joe mama1",
    strength: 50,
    speed: 55,
    img: "../media/hobart-char.png",
  },
  {
    name: "joe mama2",
    strength: 50,
    speed: 55,
    img: "../media/peni-parker.png",
  },
  {
    name: "joe mama3",
    strength: 50,
    speed: 55,
    img: "../media/miguel-char.png",
  },
  {
    name: "joe mama4",
    strength: 50,
    speed: 55,
    img: "../media/gwen-stacy.png",
  },
  {
    name: "joe mama5",
    strength: 50,
    speed: 55,
    img: "../media/spiderman_standing.png",
  },
];
let totalWidth = 0;
const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  return `rgba(${red}, ${green}, ${blue}, 1)`;
};

const generateCharacter = (character, index, offset) => {
  const char = document.createElement("div");
  char.classList.add("character");
  char.style.background = `url(${character.img}) no-repeat`;
  char.style.backgroundSize = "contain";
  char.innerText += character.name;
  // char.style.flex = `${index}`;
  const width = 350;
  const ratio = 1 - (offset * 0.1 > 0.8 ? 0.8 : offset * 0.1);
  char.style.width = `${width}px`;
  char.style.height = "600px";
  char.style.transform = `scale(${ratio}) translateZ(${offset * 30
    }px) translateY(${offset * 25}px)`;
  const opacity = 1 / (offset + 1) < 0.5 ? 0.5 : 1 / (offset + 1);
  char.style.opacity = opacity;
  char.style.position = "absolute";
  char.style.bottom = 0;
  char.style.left = `${180 * index}px`;
  totalWidth += width * ratio;
  return char;
};

const showGallery = () => {
  const galleryContainer = document.getElementById("galleryContainer");
  galleryContainer.innerHTML = "";
  totalWidth = 0;
  characters.forEach((c, i) => {
    galleryContainer.appendChild(
      generateCharacter(c, i, characters.length - (i + 1))
    );
  });
  galleryContainer.style.width = `${totalWidth - 300}px`;
};

const nextCharacter = () => {
  characters = [
    characters[characters.length - 1],
    ...characters.slice(0, characters.length - 1),
  ];
  showGallery();
};

const prevCharacter = () => {
  characters = [...characters.slice(1, characters.length), characters[0]];
  showGallery();
};

showGallery();
