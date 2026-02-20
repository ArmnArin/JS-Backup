// dom nodes
const thumbs = document.querySelectorAll("#thumbs img");
const mainImg = document.querySelector("#big img");

// function
function handleClick() {
  const newSrc = this.getAttribute("src");
  mainImg.setAttribute("src", newSrc);
}

// events
for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener("click", handleClick);
}
