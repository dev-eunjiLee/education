function solution(num, k) {
  const index = String(num).indexOf(k);
  return index === -1 ? -1 : index + 1;
}

console.log(solution(29183, 1));
