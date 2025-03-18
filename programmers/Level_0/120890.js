function solution(array, n) {
  let answer = array[0];

  for (let i = 1; i < array.length; i++) {
    console.log({ answer, i: array[i], n });
    console.log(Math.abs(answer - n) > Math.abs(array[i] - n));
    if (Math.abs(answer - n) > Math.abs(array[i] - n)) answer = array[i];
    else if (Math.abs(answer - n) === Math.abs(array[i] - n))
      answer = Math.min(answer, array[i]);
    if (array[i] - n === 0) break;
  }

  return answer;
}

console.log(solution([3, 10, 28], 20)); // 28
