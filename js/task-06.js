const input = document.querySelector("#validation-input");
input.addEventListener("input", onInputValid);

function onInputValid(e) {
  const targetInput = e.currentTarget;
  const inputTargetLength = targetInput.value.length;
  const validation = Number(targetInput.dataset.length);

  if (inputTargetLength === validation) {
    targetInput.classList.replace("invalid", "valid");
  } else
    targetInput.classList.add("invalid");
}