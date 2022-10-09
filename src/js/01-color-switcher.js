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
  if (isRunningChange) return;
  isRunningChange = true;
  refs.startBtn.disabled = true;

  changeColor();
  intervalId = setInterval(changeBodyColor, CHANGE_COLOR_INTERVAL);
}

function stopHandler() {
  if (!isRunningChange) return;
  isRunningChange = false;

  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
