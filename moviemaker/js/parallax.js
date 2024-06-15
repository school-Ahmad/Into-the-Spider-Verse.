function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const parallaxBg = document.getElementById("bgimg");
let scrollYBg = 0;
const scrollBackground = debounce((e) => {
  const isDown = e.deltaY > 0;

  function scrollStep() {
    if (scrollYBg === 0 && !isDown) {
      return;
    }
    scrollYBg += isDown ? 7 : -7;
    parallaxBg.style.transform = `translateY(${scrollYBg}px) translateZ(-1px) scale(2)`;
  }

  requestAnimationFrame(scrollStep);
}, 5);

const header = document.getElementById("spiderheader");
const allText = document.getElementById("3d-text-container");
const textOnModel = document.getElementById("textOnModel");
let scrollYHeader = 0;
const scrollHeader = debounce((e) => {
  const isDown = e.deltaY > 0;

  function scrollStep() {
    if (scrollYHeader === 0 && !isDown) {
      return;
    }
    scrollYHeader += isDown ? -10 : 10;
    header.style.transform = `translateY(${scrollYHeader}px)`;
    textOnModel.style.transform = `translateY(${scrollYHeader}px)`;
    allText.style.transform = `translateY(${scrollYHeader}px)`;
  }

  requestAnimationFrame(scrollStep);
});

window.addEventListener("wheel", scrollBackground);
window.addEventListener("wheel", scrollHeader);

const trailerLink = document.getElementById("trailer");
const modal = document.getElementById("trailerModal");
const closeBtn = document.querySelector(".close");
const trailerVideo = document.getElementById("trailerVideo");

trailerLink.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "block";
  trailerVideo.src = "https://vidsrc.to/embed/movie/tt9362722";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  trailerVideo.src = "";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    trailerVideo.src = "";
  }
});
