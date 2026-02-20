function bmi(weight, height) {
  const formula = weight / (height / 100) ** 2;
  if (formula > 24.9) {
    return "Overweight";
  }
  if (formula >= 18.5 && formula <= 24.9) {
    return "Healthy";
  }
  if (formula < 18.5) {
    return "Underweight";
  }
}
const userWieght = Number(prompt("enter your weight(kg)."));
const userHieght = Number(prompt("enter your height(cm)."));
const result = bmi(userWieght, userHieght);
alert(result);
