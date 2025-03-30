/**
 * 달리기 경주 > 추월면서 순위가 달라진다
 */
function solution(players, callings) {
  // 현재 순위를 Map으로 변경
  const playersMap = new Map(players.map((elem, index) => [elem, index]));

  // 불려진 순서대로 추월하기 때문에 불려진 순서(callings)를 순회
  callings.forEach((elem) => {
    // 승자 및 패자의 요소 및 순위를 변수에 할당
    const winnerRank = playersMap.get(elem);
    const winner = elem;

    const loserRank = winnerRank - 1;
    const loser = players[loserRank];

    // 바꿔치기
    [players[loserRank], players[winnerRank]] = [
      players[winnerRank],
      players[loserRank],
    ];

    // 바뀐 순위를 map에 새로 셋팅
    playersMap.set(winner, loserRank);
    playersMap.set(loser, winnerRank);
  });

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); //["mumu", "kai", "mine", "soe", "poe"]
