let number = 0;
function counter() {
    const h2 = document.querySelector("h2");
    number++;
    h2.textContent = number;
    if ( number % 2 == 0) {
        h2.style.color = "green";
    }
    if ( number % 2 == 1) {
        h2.style.color = "red";
    }
}
