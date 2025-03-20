function solution(n, m, section) {
  // left 변수를 section에 포함된 값을 만날 때 까지 +1하고, 만나는 경우, m길이만큼 left를 추가한다. 이 과정을 left가 section을 벗어날 때 까지 진행한다.
  let left = 0;
  let cnt = 0;

  while (left <= n - 1) {
    if (!section.includes(left + 1)) {
      left++;
      continue;
    }

    cnt++;
    left = left + m;
  }

  return cnt;
}

console.log(solution(8, 4, [2, 3, 6])); //2
console.log(solution(5, 4, [1, 3])); //1
console.log(solution(4, 1, [1, 2, 3, 4])); //4
