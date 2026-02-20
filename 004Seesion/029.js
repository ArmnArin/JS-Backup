const scores = [20, 19, 12, 11, 10, 16];

function calculateAverageScore(x) {
    let sum = 0 ;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    const avg = sum / x.length;
    return avg;
}
