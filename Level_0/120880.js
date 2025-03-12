function solution(numlist, n) {
  return numlist.sort((a, b) => {
    let result = Math.abs(a - n) - Math.abs(b - n);
    if (result === 0) {
      result = b - a;
    }
    return result;
  });
}
console.log(solution([1, 2, 3, 4, 5, 6], 4)); //[4, 5, 3, 6, 2, 1]
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); //[36, 40, 20, 47, 10, 6, 7000, 10000]
