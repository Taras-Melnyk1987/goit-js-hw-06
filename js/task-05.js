const input = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

input.addEventListener("input", simbolInputHandler);

function simbolInputHandler(event) {
  spanOutput.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    spanOutput.textContent = "Anonymous";
  }
}