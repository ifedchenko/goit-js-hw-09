const btnStartChangeColor = document.querySelector('[data-start]');
const btnStopChangeColor = document.querySelector('[data-stop]');

btnStartChangeColor.addEventListener('click', onClickStartChangeColor);

btnStopChangeColor.setAttribute('disabled', true);

btnStopChangeColor.addEventListener('click', onClickStopChangeColor);

let colorChangeInterval;

function onClickStartChangeColor() {
  const body = document.querySelector('body');
  colorChangeInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStartChangeColor.setAttribute('disabled', true);
  btnStopChangeColor.removeAttribute('disabled');
}

function onClickStopChangeColor() {
  clearInterval(colorChangeInterval);
  btnStartChangeColor.removeAttribute('disabled');
  btnStopChangeColor.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
