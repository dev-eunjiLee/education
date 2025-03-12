function solution(score) {
  const scoreMap = new Map();

  score = score
    // 기존 인덱스 기입
    .map((elem, index) => {
      return {
        sum: elem[0] + elem[1],
        originIndex: index,
      };
    })
    // 전체 합 순으로 정렬
    .sort((a, b) => b.sum - a.sum);

  let now = [0, 0]; // [rank, sum]

  // 전체 합 순으로 정렬한 값을 이용해 등수 지정(단, 같은 값인 경우 같은 등수 지정)
  for (let i = 0; i < score.length; i++) {
    const [nowRank, nowSum] = now;
    if (nowSum === score[i].sum) {
      score[i].rank = nowRank;
    } else {
      score[i].rank = i + 1;
      now = [score[i].rank, score[i].sum];
    }
    scoreMap.set(score[i].originIndex, score[i]);
  }

  const answer = [];

  // 원래 index로 값 조회
  for (let i = 0; i < score.length; i++) {
    answer.push(scoreMap.get(i).rank);
  }

  return answer;
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
); //	[1, 2, 4, 3]
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
); //	[4, 4, 6, 2, 2, 1, 7]
