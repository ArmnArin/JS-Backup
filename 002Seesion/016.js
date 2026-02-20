function monthSeason(month) {
  if (month === 1 || month === 2 || month === 3) {
    return "Spring";
  }
  if (month === 4 || month === 5 || month === 6) {
    return "Summer";
  }
  if (month === 7 || month === 8 || month === 9) {
    return "Fall";
  }
  if (month === 10 || month === 11 || month === 12) {
    return "Winter";
  }
}
const userNumber = Number(prompt("enter number of a month (1 - 12) :"));
const result = monthSeason(userNumber);
console.log(result);
