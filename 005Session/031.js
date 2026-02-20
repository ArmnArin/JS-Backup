// dom nodes
const boxes = document.querySelectorAll("div");

// function
function handleClick() {
  const currentColor = this.style.background;
  document.body.style.background = currentColor;
}

// events
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleClick);
}
