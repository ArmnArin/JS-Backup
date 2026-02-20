// dom nodes
const btn = document.querySelector("button");
const input = document.querySelector("input");

//function
function handleValidation() {
  const pattern = /[a-z0-9_.]{3,}@[a-z0-9]{1,}.[a-z]{2,}/;
  const isMatched = pattern.test(input.value);
  if (isMatched) {
    input.classList.add("valid");
  } else {
    input.classList.replace("valid", "invalid");
  }
}

// events
btn.addEventListener("click", handleValidation);
