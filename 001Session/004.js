function farToCel(Fahrenheit) {
    const Celsius = (Fahrenheit - 32) * 5/9;
    return Celsius;
}
const userDegree = Number(prompt("enter fahrenheit degree to change it to celsius ."));
const result = farToCel(userDegree);
console.log(result);
