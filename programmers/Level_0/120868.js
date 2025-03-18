function solution(sides) {
  const answer = new Set();

  let max = Math.max(...sides);
  let min = Math.min(...sides);

  // 기존 배열에 가장 큰 변의 길이가 있는 경우(기존 배열 밖 값과 동일할 수 있음)
  for (let i = 1; i <= max; i++) {
    if (i + min > max) answer.add(i);
  }

  // 기존 배열 밖에 가장 큰 변의 길이가 있는 경우
  for (let i = max + 1; i < min + max; i++) {
    answer.add(i);
  }

  return answer.size;
}

console.log(solution([1, 2])); //1
console.log(solution([3, 6])); //5
console.log(solution([11, 7])); //13
