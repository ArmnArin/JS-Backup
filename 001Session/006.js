let sum = 0;
for (let i = 0; ; i++) {
    const userNumber = Number(prompt("enter your number."));
    sum += userNumber;
    if (userNumber == 0) {
        break;
    }
}
console.log(sum);
