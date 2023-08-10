const input = document.querySelector("#font-size-control");
const text = document.querySelector('#text');
input.addEventListener("input", onInputClick);
  
  function onInputClick(event) {
      const fontSize = event.target.value;
      text.style.fontSize = fontSize + 'px';
  }