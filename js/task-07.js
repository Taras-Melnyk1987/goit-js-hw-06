const fontSizeSwithcer = document.querySelector("#font-size-control");
const outputSize = document.querySelector("#text");

fontSizeSwithcer.addEventListener("input", handleFontSize);

function handleFontSize(e) {
  const switcher = e.currentTarget;
  outputSize.style.fontSize = `${switcher.value}px`;
}