function mkRandom () {
    const randomNumber = Math.floor(Math.random() * 10);
    const h1 = document.getElementById("text");
    h1.textContent = randomNumber;
}
