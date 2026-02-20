const PRIZE = ['none', 'women' , 'BBC' , 'none' , 'dildo' , 'none' , 'butt plug' , 'home' , 'car'];

function getPrize() {
    const arrayIndex = Math.floor(Math.random() * PRIZE.length);
    const prize = PRIZE[arrayIndex];
    document.querySelector("h2").textContent = prize;
}
