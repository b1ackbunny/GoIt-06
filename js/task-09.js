const refs = {
  color: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
};

refs.btn.addEventListener('click', onColorChange);

function onColorChange(event) {
  let colorChange = `${getRandomHexColor()}`;
  document.body.style.backgroundColor = colorChange;
  refs.color.textContent = colorChange;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
