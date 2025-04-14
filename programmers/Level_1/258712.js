/**
 *
 * 다음 달에 누가 선물을 많이 받을지 예측해서 그 사람이 받는 선물의 개수를 리턴
 *
 * 1. 두 사람 사이 선물을 주고받은 횟수를 비교하여, 더 많이 선물한 쪽이 선물을 받는다.
 * 2. 선물을 주고받은 적이 없거나 선물을 주고받은 횟수가 동일하다면 선물 지수가 더 큰 사람이 선물을 받는다.
 * 2-1. 선물지수: 이번달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값
 * 2-2. 두 사람의 선물지수도 같다면 다음달에 선물을 주고받지 않는다.
 *
 * @param {Array<string>} friends 친구들의 이름
 * - 2 <= friends <= 50
 * - 알파벳 소문자로 구성되며, 최대 길이는 10
 * - 이름이 같은 친구는 없다.
 * @param {Array<string>} gifts 이번달까지 친구들이 주고받은 선물 기록.
 * - 형태: "A B" > A가 B에게 선물을 준 경우
 * - A===B 는 없음
 *
 */

function solution(friends, gifts) {
  // 계산해야 할 값 - 서로 간 선물 주고받은 횟수, 선물 지수

  const obj = {
    // 서로 간 선물 주고받은 횟수
    // key: "A B"
    compare: {},
    // 개별 선물지수
    total: {},
    // 다음달에 받는 선물 지수
    next: {},
  };

  // 서로 주고받은 선물 숫자 및 선물지수 확인
  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];

    const [sender, receiver] = gift.split(" ");

    obj.compare[gift] = (obj.compare[gift] ?? 0) + 1;

    obj.total[sender] = (obj.total[sender] ?? 0) + 1;
    obj.total[receiver] = (obj.total[receiver] ?? 0) - 1;
  }

  // 유저별로 순회하며, 각 유저가 받아야할 선물 개수 카운트하기
  for (let i = 0; i < friends.length; i++) {
    const x_friend = friends[i];
    for (let j = i + 1; j < friends.length; j++) {
      const y_friend = friends[j];

      // 서로 유저간의 선물 횟수 비교
      const x_send_cnt = obj.compare[`${x_friend} ${y_friend}`] ?? 0;
      const y_send_cnt = obj.compare[`${y_friend} ${x_friend}`] ?? 0;

      if (x_send_cnt > y_send_cnt) {
        obj.next[x_friend] = (obj.next[x_friend] ?? 0) + 1;
      } else if (y_send_cnt > x_send_cnt) {
        obj.next[y_friend] = (obj.next[y_friend] ?? 0) + 1;
      } else {
        // 서로 유저간의 선물 횟수를 비교했을 때 그 값이 같은 경우 전체 선물 지수를 확인한다.
        const x_total_cnt = obj.total[x_friend] ?? 0;
        const y_total_cnt = obj.total[y_friend] ?? 0;

        if (x_total_cnt > y_total_cnt) {
          obj.next[x_friend] = (obj.next[x_friend] ?? 0) + 1;
        } else if (y_total_cnt > x_total_cnt) {
          obj.next[y_friend] = (obj.next[y_friend] ?? 0) + 1;
        }
      }
    }

    if (!obj.next[x_friend]) {
      obj.next[x_friend] = 0;
    }
  }

  // 최대값 리턴
  return Math.max(...Object.values(obj.next));
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
); //2
console.log(
  solution(
    ["joy", "brad", "alessandro", "conan", "david"],
    [
      "alessandro brad",
      "alessandro joy",
      "alessandro conan",
      "david alessandro",
      "alessandro david",
    ]
  )
); //4
console.log(
  solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])
); //0
console.log(solution(["a", "b", "c"], ["a b"])); //2
