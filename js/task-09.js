function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  colorCode: document.querySelector(".color"),
  bodyColor: document.querySelector("body"),
}

refs.changeColorBtn.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  refs.colorCode.textContent = getRandomHexColor();
  refs.bodyColor.style.backgroundColor = `${refs.colorCode.textContent}`;
}