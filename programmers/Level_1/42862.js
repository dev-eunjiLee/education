/**
 * n: 전체 학생의 수 2 ~ 30
 * lost: 체육복을 도난당한 학생들의 번호가 담긴 배열 1 ~ n명(중복X)
 * reserve: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 1 ~ n명(중복X)
 *
 * 학생들의 번호는 체격 순으로 매겨져있음
 * 체육복은 바로 앞 혹은 뒷 번호 학생에게만 빌릴 수 있음(체격)
 * 체육복이 없는 경우 수업을 들을 수 없기 때문에 체육복을 최대한 많이 빌려줘야함
 * 여벌 체육복을 각져온 학생이 체육복을 도난당할수도 있으며, 이 때는 1개만 도난당했다고 가졍한다. 이 때 남은 체육복은 본인이 써야하니까 다른 학생에게 빌려줄 수 없다
 */
function solution(n, lost, reserve) {
  // lost, reserve를 각각 set으로 만든 후, 우선 동일한 값을 제거해준 후, 순회하면서 +1, -1 값까지 확인
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  for (let i = 0; i < lost.length; i++) {
    const perLost = lost[i];

    if (reserveSet.has(perLost)) {
      lostSet.delete(perLost);
      reserveSet.delete(perLost);
    }
  }

  const newReserveList = [...reserveSet].sort((a, b) => a - b);

  for (let i = 0; i < newReserveList.length; i++) {
    const perReserver = newReserveList[i];

    const directionList = [];

    if (perReserver === 1) directionList.push(1);
    else if (perReserver === n) directionList.push(-1);
    else directionList.push(-1, 1);

    for (const direction of directionList) {
      const friend = perReserver + direction;

      if (lostSet.has(friend)) {
        lostSet.delete(friend);
        break;
      }
    }
  }

  return n - lostSet.size;
}

console.log(solution(5, [2, 4], [1, 3, 5])); //5
console.log(solution(5, [2, 4], [3])); //4
console.log(solution(5, [2, 4, 5], [1, 3, 5])); //5
console.log(solution(3, [3], [1])); //2
console.log(solution(2, [1], [2])); //2
console.log(solution(2, [1], [1])); //2
console.log(solution(1, [1], [1])); //1
console.log(solution(2, [1, 2], [1, 2])); //2
console.log(solution(4, [1], [3, 4])); //3
console.log(solution(5, [2, 3], [3, 4])); //4
console.log(solution(5, [4, 2], [3, 5])); //5;
console.log(solution(5, [4, 5], [3, 4])); //4
