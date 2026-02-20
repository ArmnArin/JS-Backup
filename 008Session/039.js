// dom nodes
const btn = document.querySelector("button");
const input = document.querySelector("input");

//function
function handleValidation() {
  const pattern = /989[\d]{9}/;
  const isMatched = pattern.test(input.value);
  if (isMatched) {
    input.classList.add("valid");
  } else {
    input.classList.replace("valid", "invalid");
  }
}

// events
btn.addEventListener("click", handleValidation);
