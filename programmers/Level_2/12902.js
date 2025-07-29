function solution(n) {
  if (n === 1) throw Error();

  const half = Math.floor(n / 2);
  // 홀수 여부
  const isOdd = n % 2 === 1;
  console.log({ half });

  let ans = 3 ** half;

  return ans + 2;
}

console.log(solution(4)); // 11
