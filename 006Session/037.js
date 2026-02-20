// dom nodes
const btn = document.querySelector("button");
const span = document.querySelector("span");

// function
function handleEvent() {
  span.textContent = +span.textContent + 1;
}

// events
btn.addEventListener("click", handleEvent);
