function middleNum(a, b, c) {
  let number = "";
  if (a || c < b < a || c) {
    number = b;
  }
  if (a || b < c < a || b) {
    number = c;
  }
  if (b || c < a < b || c) {
    number = a;
  }
  return number;
}
