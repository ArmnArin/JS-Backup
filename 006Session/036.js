const numbers = [1, 2, 3, 4];

function squareNumber(list) {
  const squareNum = [];
  for (const num of list) {
    squareNum.push(Math.pow(num, 2));
  }
  return squareNum;
}
