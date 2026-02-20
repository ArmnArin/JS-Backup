function handleChangeBackgrounds() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const box = document.getElementById("box");
  box.style.background = `rgb(${red} , ${green} , ${blue})`;
  const Num = Math.floor(Math.random() * 5 + 1);
  document.body.style.background = `url(./backgrounds/back-${Num}.jpg)`;
  document.body.style.backgroundSize = "cover";
}
