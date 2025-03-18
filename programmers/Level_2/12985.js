function solution(n, a, b) {
  let me = a;
  let rival = b;

  let cnt = 0;

  while (true) {
    me = Math.ceil(me / 2);
    rival = Math.ceil(rival / 2);
    cnt++;
    if (me === rival) break;
  }
  return cnt;
}

console.log(solution(8, 4, 7)); // 3
