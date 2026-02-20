function evenOrOdd(a) {
  if (a % 2 == 0) {
    return "number is even";
  }
  if (a % 2 == 1) {
    return "number is odd";
  }
}
const number = prompt("enter a number.");
const result = evenOrOdd(number);
alert(result);
