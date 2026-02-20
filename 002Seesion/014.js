function changeBg() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.background = "rgb(" + red + "," +  green + "," + blue + ")";
}
