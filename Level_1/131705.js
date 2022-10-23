function solution(number) {
  let cnt = 0;
  number.forEach((firstPer, firstIndex) => {
    number.forEach((secondPer, secondIndex) => {
      number.forEach((thirdPer, thirdIndex) => {
        if (
          firstIndex < secondIndex &&
          secondIndex < thirdIndex &&
          firstPer + secondPer + thirdPer === 0
        ) {
          console.log(firstPer, secondPer, thirdPer);
          cnt++;
        }
      });
    });
  });
  return cnt;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
