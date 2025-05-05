/**
 *
 *
 * @param {number} k 유저의 현재 피로도
 * @param {Array<[number, number]>} dungeons [최소 필요 피로도, 소모 피로도]
 *  최소 필요 피로도: 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도
 *  소모 피로도: 던전을 탐험한 후 소모되는 피로도
 *
 * 현재 피로도에서 가장 많이 탐험을 돌아야한다
 * @returns
 */

function solution(k, dungeons) {
  // 최대 던전 횟수
  let maximum = 0;

  // 던전 돌기
  const tour = (hp, dungeonList, cnt) => {
    // 던전 목록 카피(원 배열에 영향을 안주기 위해서)
    const copiedDungeonList = [...dungeonList];

    // 던전 순회
    for (const [minimumHp, consumeHp] of copiedDungeonList) {
      // hp가 최소 필요 피로도보다 높은 경우 던전 돌기
      if (hp >= minimumHp) {
        const newCnt = cnt + 1;

        // 최대값 업데이트
        maximum = Math.max(maximum, newCnt);

        // 돌지 않은 던전을 추가로 돌기
        tour(
          // 새로운 hp
          hp - consumeHp,
          // 돌지 않은 던전 목록
          copiedDungeonList.filter((elem) => {
            return !(elem[0] === minimumHp && elem[1] === consumeHp);
          }),
          // 던전 돈 횟수
          newCnt
        );
      }
    }
  };

  tour(k, dungeons, 0);

  return maximum;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); //3
