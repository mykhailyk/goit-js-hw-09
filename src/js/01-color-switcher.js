function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', startHandler);
stopBtn.addEventListener('click', stopHandler);

function changeColor() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
}

function startHandler() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  changeColor();
  timerId = setInterval(changeColor, 1000);
}

function stopHandler() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(timerId);
}
