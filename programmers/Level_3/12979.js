function solution(n, stations, w) {
  // station 정렬
  stations = stations.sort((a, b) => a - b);

  // 추가로 설치해야 하는 기지국 수
  let answer = 0;

  // 한 기지국이 커버할 수 있는 범위(자기 위치 + 양 옆 w칸)
  let coverage = 2 * w + 1;

  // 마지막으로 커버된 아파트 번호
  let lastCovered = 0;

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i]; // 현재 기지국
    const start = station - w; // 현재 기지국이 커버하는 시작점
    const end = station + w; // 현재 기지국이 커버하는 끝점

    // 이번 기지국이 커버하기 전의 구간 중 아직 커버되지 않은 구간의 길이 계산
    // 예: lastCovered = 0 이고 start가 3이면, 1~2ㄷ번 아파트가 커버되지 않았으므로 gap = 2
    const gap = start - lastCovered - 1;

    if (gap > 0) {
      // 커버되짖 않ㄴ은 구간이 있다면, 그 구간을 커버하기 위해 몇 개의 기지국이 필요한지 계산
      // 한 기지국은 coverage 만큼 커버 가능
      answer += Math.ceil(gap / coverage);
    }

    // 현재 기지국이 커버한 끝 점이 마지막으로 커버된 아파트 번호
    lastCovered = end;
  }

  // 마지막 기지국 이후에도 커버되지 않은 아파트가 있는 경우 처리
  if (lastCovered < n) {
    const gap = n - lastCovered;
    answer += Math.ceil(gap / coverage);
  }

  return answer;
}

console.log(solution(11, [4, 11], 1)); //3
console.log(solution(16, [9], 2)); //3
console.log(solution(1, [1], 1)); // 0
console.log(solution(3, [2], 1)); // 0
console.log(solution(3, [3], 2)); // 0
console.log(solution(3, [3], 1)); // 1
