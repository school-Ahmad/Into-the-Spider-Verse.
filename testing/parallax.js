// Debounce function to limit scroll event frequency
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
  console.log("paralaxx");
  const isDown = e.deltaY > 0;

  function scrollStep() {
    if (scrollYBg === 0 && !isDown) {
      return;
    }
    scrollYBg += isDown ? 7 : -7;
    parallaxBg.style.transform = `translateY(${scrollYBg}px) translateZ(-1px) scale(2)`;
    // if (scrollY < window.innerHeight) {
    //   requestAnimationFrame(scrollStep);
    // }
  }

  requestAnimationFrame(scrollStep);
}, 5);

const header = document.getElementById("spiderheader");
let scrollYHeader = 0;
const scrollHeader = debounce((e) => {
  console.log("paralaxx");
  const isDown = e.deltaY > 0;

  function scrollStep() {
    if (scrollYHeader === 0 && !isDown) {
      return;
    }
    scrollYHeader += isDown ? -10 : 10;
    header.style.transform = `translateY(${scrollYHeader}px)`;
  }

  requestAnimationFrame(scrollStep);
});

window.addEventListener("wheel", scrollBackground);
window.addEventListener("wheel", scrollHeader);
