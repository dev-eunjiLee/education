function solution(arr) {
  const left = arr.indexOf(2);
  const right = arr.lastIndexOf(2) + 1;

  let answer;

  if (left === -1 && right === 0) {
    answer = [-1];
  } else {
    answer = arr.slice(left, right);
  }

  return answer;
}

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]
