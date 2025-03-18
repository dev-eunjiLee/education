function solution(arr) {
  return arr.filter((per, index) => {
    return arr[index - 1] !== per;
  });
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
