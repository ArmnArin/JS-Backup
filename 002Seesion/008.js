function tax(price) {
  const valueOfTax = price * 0.09;
  return valueOfTax;
}
const clientPrice = Number(prompt("enter your oreder price (tooman) :"));
const result = tax(clientPrice);
console.log(result);
