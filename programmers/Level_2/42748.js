function solution(numbers) {
  let ans = numbers
    .sort((a, b) => Number(`${b}${a}` - Number(`${a}${b}`)))
    .join("");

  return Number(ans) === 0 ? "0" : ans;
}

console.log(solution([6, 10, 2])); //"6210"
console.log(solution([3, 30, 34, 5, 9])); //"9534330"
