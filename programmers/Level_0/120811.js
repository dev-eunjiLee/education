function solution(array) {
  return array.sort((a, b) => b - a)[Math.floor(array.length / 2)];
}

console.log(solution([1, 2, 8, 10, 12]));
