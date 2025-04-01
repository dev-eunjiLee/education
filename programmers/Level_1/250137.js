/**
 *
 * @param {Array<number>} bandage bandage[0] 기술의 시전 시간, bandage[1] 1초당 회복량, bandage[2] 추가 회복량
 * @param {number} health 최대 체력
 * @param {Array<Array<number>>} attacks 몬스터의 공격 시간과 피해량
 *
 * 공격을 당하는 순간 혹은 연속 성공을 성공한 경우 > 연속 성공 시간은 0으롤 초기화
 * 체력이 0 이하가 되는 경우 더이상 체력을 회복하지못하고 게임이 끝난다
 *
 * return 남은체력, 단 죽은 경우 -1
 */

function solution(bandage, health, attacks) {
  // t: 기술의 시전 시간(연속 시간의 최댓값)
  // x: 1초당 회복할 수 있는 체력
  // y: t시간만큼 연속으로 체력을 회복했을때 추가로 받는 체력
  const [t, x, y] = bandage;

  // 공격의 현재 index
  let attacksIndex = 0;
  // 현재 시간(공격 시점과의 비교에서 사용하는 변수)
  let time = 0;
  // 연속 성공 시간(현재 시간과 달리, 공격을 당하거나 한 번 추가 시간을 받은 경우 리셋된다)
  let successTime = 0;

  // 현재 체력(health에서 시작하나 공격 혹은 회복에 따라 그 값이 달라진다.)
  let hp = health;

  // 전체 공격이 끝나거나, 체력이 사라질 때 까지 계속해서 반복문을 돌며 공격 및 회복을 진행
  while (attacksIndex < attacks.length && hp > 0) {
    // 시간과 연속 시간을 각각 +1
    time++;
    successTime++;

    // 공격시간과 공격파워를 변수에 할당
    const [attackTime, attackPower] = attacks[attacksIndex];

    if (
      // 현재가 공격시간인 경우, hp를 attackPower만큼 깎고 다음 공격으로 넘어간다.
      time === attackTime
    ) {
      // 공격으로 체력 감소
      hp -= attackPower;
      // 다음 공격으로 넘어가기(time이 될 때 까지 대기)
      attacksIndex++;
      // 연속 성공 시간 초기화
      successTime -= successTime;
    } else {
      // 공격 타임이 아닌 경우: hp 회복 진행
      if (
        // 연속 성공 시간을 다 채운 경우
        successTime === t
      ) {
        // 추가 체력 획득
        hp += y;
        // 연속 성공 시간 초기화
        successTime -= successTime;
      }

      // 초 당 체력 회복
      hp += x;
    }

    // 공격 혹은 체력이 다 끝난 후, 남아있는 체력이 최대 체력(health)을 초과한 경우 health로 맞춰놓기
    if (hp > health) hp = health;
  }

  // 만약, hp가 0이하면, -1리턴(죽음)
  return hp > 0 ? hp : -1;
}

// 시작하자마자 바로 아웃되는 경우
console.log(solution([1, 1, 1], 5, [[1, 10]])); // -1
// 마지막에 아웃되는 경우
console.log(solution([1, 1, 1], 5, [[5, 100]])); // -1
console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
); //	5
console.log(
  solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
); // -1
console.log(
  solution([4, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
); // -1
console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
); // 3
