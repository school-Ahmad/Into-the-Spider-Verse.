let current = 0;
const max = 200;
const min = 0;
window.addEventListener("wheel", (e) => {
  const isDown = e.deltaY > 0;
  const element = document.getElementById("tracker");
  current += isDown ? 2 : -2;
  if (current > max) current = max;
  if (current < min) current = min;
  element.style.top = `${current}px`;
});
