function solution(arr, k) {
  const isEven = k % 2 === 0;

  let answer;
  if (isEven) {
    answer = arr.map((elem) => elem + k);
  } else {
    answer = arr.map((elem) => elem * k);
  }

  return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98], 3));
console.log(solution([1, 2, 3, 100, 99, 98], 2));
