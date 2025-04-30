/**
 *
 * @param {Array<number>} priorities
 * @param {number} location
 */

function solution(priorities, location) {
  // priorities 배열을 index, priority 를 키로 가진 객체의 배열로 변경
  const queue = priorities.map((priority, index) => {
    return { index, priority };
  });

  // 몇번째로 실행되는지를 보여주기 위한 변수
  let cnt = 0;

  // queue의 길이가 있는 동안 계속 반복문 진행
  while (queue.length > 0) {
    // 가장 맨 앞 값을 가져오기
    const curr = queue.shift();

    // 그 값보다 큰 값이 배열에 있는지 확인
    const hasHigherPriority = queue.some(
      (elem) => elem.priority > curr.priority
    );

    // 가장 큰 값이 있는 경우, 그 값을 다시 맨 뒤에 넣기
    if (hasHigherPriority) {
      queue.push(curr);
    } else {
      // curr이 가장 큰 값인 경우 cnt에 추가하고, index와 location으로 비교해서 리턴까지 처리
      cnt++;
      if (curr.index === location) {
        return cnt;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
