const refs = {
  btnStartChangeColor: document.querySelector('[data-start]'),
  btnStopChangeColor: document.querySelector('[data-stop]'),
};

refs.btnStartChangeColor.addEventListener('click', onClickStartChangeColor);

refs.btnStopChangeColor.setAttribute('disabled', true);

refs.btnStopChangeColor.addEventListener('click', onClickStopChangeColor);

let colorChangeInterval = null;

function onClickStartChangeColor() {
  const body = document.querySelector('body');
  colorChangeInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStartChangeColor.setAttribute('disabled', true);
  refs.btnStopChangeColor.removeAttribute('disabled');
}

function onClickStopChangeColor() {
  clearInterval(colorChangeInterval);
  refs.btnStartChangeColor.removeAttribute('disabled');
  refs.btnStopChangeColor.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
