/**
 * * 큰 순, 작은 순으로 각각 정렬한 후 순서대로 곱한다
 */
function solution(A, B) {
  let total = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    const minA = A[i];
    const maxB = B[i];

    total += minA * maxB;
  }

  return total;
}
console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
