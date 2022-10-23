function solution(a, b, n) {
  const standardInputCnt = a;
  const standardOutputCnt = b;
  let emptyBottleCnt = n;

  let totalChangeCnt = 0;

  while (true) {
    // 바꿔서 받은 새로운 빈 병
    const changedCnt =
      Math.floor(emptyBottleCnt / standardInputCnt) * standardOutputCnt;
    // 전체 바꿔서 받은 병의 수
    totalChangeCnt += changedCnt;
    // 바꿔서 받은 빈 병을 구할 때의 나머지 + 바꿔서 받은 병의 수를 새로운 빈 병 수로 업데이트
    emptyBottleCnt = (emptyBottleCnt % a) + changedCnt;
    if (emptyBottleCnt < standardInputCnt) {
      break;
    }
  }

  return totalChangeCnt;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
