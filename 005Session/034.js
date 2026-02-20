// dom nodes
const boxes = document.querySelectorAll("div");

// function
function randomNum() {
  const number = Math.floor(Math.random() * 10 + 1);
  this.textContent = number;

  if (number == 1) {
    this.style.color = "red";
  }
  if (number == 2) {
    this.style.color = "yellow";
  }
  if (number == 3) {
    this.style.color = "green";
  }
  if (number == 4) {
    this.style.color = "white";
  }
  if (number == 5) {
    this.style.color = "pink";
  }
  if (number == 6) {
    this.style.color = "blue";
  }
  if (number == 7) {
    this.style.color = "gray";
  }
  if (number == 8) {
    this.style.color = "black";
  }
  if (number == 9) {
    this.style.color = "purple";
  }
  if (number == 10) {
    this.style.color = "brown";
  }
}

// events
for (const box of boxes) {
  box.addEventListener("click", randomNum);
}
