import Renderer from "./render.js";
const renderer = new Renderer(10);

let loop;
let fps = 120,
  fpsInterval,
  startTime,
  now,
  then,
  elapsed;

function init() {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  loop = setInterval(() => {
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
    }
    loop = requestAnimationFrame(step);
  }, 0);
}

init();
