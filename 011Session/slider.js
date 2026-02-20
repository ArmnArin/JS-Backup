const handleChangeSlide = (event) => {
  if (event.wheelDelta > 0) {
    console.log("BALA");
    event.target.previousElementSibling.classList.remove("top");
  } else {
    console.log("PAYEN");
    event.target.classList.add("top");
  }
};

window.addEventListener("wheel", handleChangeSlide);
