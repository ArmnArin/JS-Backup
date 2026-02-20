let imgNum = 1;
document.body.style.background = `url(./backgrounds/back-${imgNum}.jpg)`;
document.body.style.backgroundSize = "cover";
function handleNext() {
  imgNum++;
  document.body.style.background = `url(./backgrounds/back-${imgNum}.jpg)`;
}
function handlePrev() {
  imgNum--;
  document.body.style.background = `url(./backgrounds/back-${imgNum}.jpg)`;
}
