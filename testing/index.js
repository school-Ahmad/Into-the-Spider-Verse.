let currentFrame = 1;
const totalFrames = 80;
const element = document.getElementById("spiderman");
element.style.background = `url("./rendered_spidey/0001.webp")`;

// Preload images
const images = [];
for (let i = 1; i <= totalFrames; i++) {
  const img = new Image();
  img.src = `./rendered_spidey/${i < 10 ? "000" : "00"}${i}.webp`;
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

const changeBackground = debounce((e) => {
  const isDown = e.deltaY > 0;

  currentFrame += isDown ? 1 : -1;
  if (currentFrame <= 0) currentFrame = 1;
  if (currentFrame > totalFrames) currentFrame = totalFrames;

  element.style.background = `url("./rendered_spidey/${currentFrame < 10 ? "000" : "00"}${currentFrame}.webp")`;
}, 5); // Adjust debounce delay as needed

window.addEventListener("wheel", changeBackground, { passive: true });
