const body = document.querySelector("body");
const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  color.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}