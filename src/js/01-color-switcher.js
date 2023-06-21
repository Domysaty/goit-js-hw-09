const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

let intervalId = null;

function onStartClick() {
  startBtn.disabled = true;
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function onStopClick() {
  startBtn.disabled = false;
  clearInterval(intervalId);
  intervalId = null;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
