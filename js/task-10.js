function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("div#boxes"),
};

let number = 0;

refs.input.addEventListener("blur", getNumber);
refs.createBtn.addEventListener("click", onBtnCreateClick);
refs.destroyBtn.addEventListener("click", onBtnDestroyClick);

function onBtnCreateClick() {
  createBoxes(number);
}

function onBtnDestroyClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxes = [];
  const step = 10;
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    let box = `<div class="box" style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    boxes.push(box);
    size += step;
  }
  const output = boxes.join("");
  refs.boxes.insertAdjacentHTML("beforeend", output);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getNumber(e) {
  number = Number(e.currentTarget.value);
}