function solution(k, tangerine) {
  let answer;

  // 사이즈별 객체 만들기
  const typeObj = {};
  tangerine.forEach((per) => {
    const origin = typeObj[per];
    if (!origin) typeObj[per] = 1;
    else typeObj[per] = origin + 1;
  });

  // 정렬
  const list = Object.entries(typeObj).sort((a, b) => b[1] - a[1]);

  // 가장 개수가 많은 사이즈부터 상자에 넣기 시작 => 상자에 남는 공간이 사라질 대 까지 반복
  let flag = true;
  let index = 0;
  let rest = k;
  while (flag) {
    rest = rest - list[index][1];
    if (rest <= 0) {
      flag = false;
    }
    index++;
  }

  answer = index;

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 3, 2, 5, 4, 5, 2, 3])); // 1
