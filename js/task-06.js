const input = document.querySelector("#validation-input");
input.addEventListener("blur", onInputBlur);

function onInputFocus(event) {}

function onInputBlur(event) {
  const inputDataLength = Number(input.getAttribute("data-length"));
  const inputValueLength = event.target.value.length;

  if (inputValueLength === inputDataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
