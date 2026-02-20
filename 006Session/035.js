const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvennumbers(list) {
  const result = [];

  for (const num of list) {
    if (num % 2 == 0) {
      result.push(num);
    }
  }
  return result;
}
