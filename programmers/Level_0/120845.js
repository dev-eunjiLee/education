function solution(box, n) {
  const [x, y, z] = box.map((elem) => {
    return Math.floor(elem / n);
  });

  return x * y * z;
}

console.log(solution([1, 1, 1], 1));
console.log(solution([10, 8, 6], 3));
