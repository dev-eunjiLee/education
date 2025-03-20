function solution(k, m, score) {
  return score
    .sort((a, b) => b - a)
    .reduce((sum, curr, index) => {
      if ((index + 1) % m === 0) {
        sum += m * curr;
      }

      return sum;
    }, 0);
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); //8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); //33
