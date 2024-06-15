let currentFrame = 1;
const totalFrames = 80;
const element = document.getElementById("spiderman");
let folderName =
  screen.width < 700 ? "morales_spiderman_mobile" : "morales_spiderman";
element.style.background = `url("./${folderName}/0001.webp")`;

// Preload images
const images = [];
for (let i = 1; i <= totalFrames; i++) {
  const img = new Image();
  img.src = `./${folderName}/${i < 10 ? "000" : "00"}${i}.webp`;
  images.push(img);
}

// Debounce function to limit scroll event frequency
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const setImageSize = () => {
  if (screen.width < 700) {
    folderName = "morales_spiderman_mobile";
    element.style.backgroundSize = `cover`;
  } else {
    folderName = "morales_spiderman";
  }
};

const changeBackground = (isDown) => {
  currentFrame += isDown ? 1 : -1;
  if (currentFrame <= 0) currentFrame = 1;
  if (currentFrame > totalFrames) currentFrame = totalFrames;
  if (currentFrame > 8) {
    const trailerBtn = document.getElementById("textOnModel");
    requestAnimationFrame(() => {
      trailerBtn.style.opacity = 0;
    });
  } else {
    const trailerBtn = document.getElementById("textOnModel");
    requestAnimationFrame(() => {
      trailerBtn.style.opacity = 1;
    });
  }
  if (currentFrame > 24) {
    const galleryBtn = document.getElementById("galleryBtn");
    requestAnimationFrame(() => {
      galleryBtn.style.opacity = 1;
    });
  }
  if (currentFrame <= 18 || currentFrame >= 37) {
    const galleryBtn = document.getElementById("galleryBtn");
    requestAnimationFrame(() => {
      galleryBtn.style.opacity = 0;
    });
  }
  element.style.background = `url("./${folderName}/${
    currentFrame < 10 ? "000" : "00"
  }${currentFrame}.webp")`;
  setImageSize();
};
const changeBackgroundDesktop = debounce((e) => {
  const isDown = e.deltaY > 0;
  changeBackground(isDown);
}, 5); // Adjust debounce delay as needed
let lastY = 0;

const changeBackgroundMobile = debounce((e) => {
  const isDown = e.touches[0].clientY < lastY;
  changeBackground(isDown);
  lastY = e.touches[0].clientY;
}, 16);

setImageSize();
window.addEventListener("wheel", changeBackgroundDesktop);
window.addEventListener("touchmove", changeBackgroundMobile);
