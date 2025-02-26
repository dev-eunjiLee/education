function solution(hp) {
  let cnt = 0;

  for (const elem of [5, 3, 1]) {
    cnt += Math.floor(hp / elem);
    hp = hp % elem;
  }

  return cnt;
}

console.log(solution(23));
console.log(solution(24));
