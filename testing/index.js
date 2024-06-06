let currentFrame = 1;
let totalFrames = 0;
const element = document.getElementById("spiderman");
let isScrolling = false;
let lastFrame = 0;

// Function to load JSON file
async function loadImages() {
  const response = await fetch('images.json');
  const data = await response.json();
  return data.images;
}

// Preload images and set initial background
loadImages().then(images => {
  totalFrames = images.length;

  // Set the initial background immediately
  element.style.background = `url("${images[0]}")`;

  // Preload images asynchronously
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  const changeBackground = (e) => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        const isDown = e.deltaY > 0;

        currentFrame += isDown ? 1 : -1;
        if (currentFrame <= 0) currentFrame = 1;
        if (currentFrame > totalFrames) currentFrame = totalFrames;

        if (currentFrame !== lastFrame) {
          element.style.background = `url("${images[currentFrame - 1]}")`;
          lastFrame = currentFrame;
        }

        isScrolling = false;
      });
    }
    isScrolling = true;
  };

  window.addEventListener("wheel", changeBackground);
}).catch(error => {
  console.error('Error loading images:', error);
});
