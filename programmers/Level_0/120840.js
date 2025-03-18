function solution(balls, share) {
  const factorial = (x) => {
    return x === 0
      ? BigInt(1)
      : Array.from({ length: x }, (_, i) => i + 1).reduce(
          (prev, curr) => BigInt(prev) * BigInt(curr),
          BigInt(1)
        );
  };

  return Number(
    (
      factorial(balls) /
      (factorial(balls - share) * factorial(share))
    ).toString()
  );
}

console.log(solution(3, 2)); //	3
console.log(solution(5, 3)); //	10
console.log(solution(3, 3)); //	1
console.log(solution(30, 15)); //	155117520
