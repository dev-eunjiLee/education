function solution(num, total) {
  let startNumber = Math.floor(total / num);

  let sum;
  let list;
  while (true) {
    list = Array.from({ length: num }, (_, i) => startNumber + i);
    sum = list.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    console.log(sum, startNumber);
    if (sum === total) {
      break;
    }
    if (sum < total) {
      startNumber++;
    } else if (sum > total) {
      startNumber--;
    }
  }
  return list;
}
