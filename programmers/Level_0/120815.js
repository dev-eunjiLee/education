function solution(n) {
  let i = 1;
  while (true) {
    if ((6 * i) % n === 0) break;
    else i++;
  }
  return i;
}

console.log(solution(6));
console.log(solution(10));
