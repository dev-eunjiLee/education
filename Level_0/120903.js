function solution(s1, s2) {
  let result = 0;
  for (const first of s1) {
    for (const second of s2) {
      if (first === second) result++;
    }
  }
  return result;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); //	2
console.log(solution(["n", "omg"], ["m", "dot"])); //	0
