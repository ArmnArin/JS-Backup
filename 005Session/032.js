// dom node
const boxes = document.querySelectorAll("div");

// function
function handleClick() {
  const random = Math.floor(Math.random() * 100);
  this.textContent = random;

  if (random > 80) {
    this.style.color = "green";
  }
  if (random < 80) {
    this.style.color = "white";
  }
}

// events
// for-of loop
for (const box of boxes) {
  box.addEventListener("click", handleClick);
}
