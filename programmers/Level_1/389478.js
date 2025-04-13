/**
 * 택배 상자 꺼내기
 *
 * 밑에서부터 순차적으로 w개씩 상자를 쌓은 후,
 * num번째 상자를 꺼내야하는데, 이 때 바로 num 번호 위에 쌓인 상자의 개수는?
 *
 * @param {number} n 택배상자 개수
 * @param {number} w 가로 길이
 * @param {number} num 꺼내려는 택배상자 번호
 */
function solution(n, w, num) {
  console.log({ n, w, num });

  // 배열 생성, 각 배열이 쌓은 상자의 세로줄이 된다.
  const arr = Array.from({ length: w + 1 }, () => []);

  // 상자쌓는 방향
  let isRight = true;

  // 상자 쌓는 index(1부터 시작)
  let index = 0;

  // 찾아야하는 상자가 들어있는 배열의 index
  let targetIndex;

  for (let i = 1; i <= n; i++) {
    // index가 범위 밖으로 나가는 경우 index 재조정 및 방향 변경
    if (index === w + 1) {
      isRight = false;
      index--;
    } else if (index === 0) {
      isRight = true;
      index = 1;
    }

    console.log({ i, isRight, index });

    // index에 상자 추가
    arr[index].push(i);

    // 만약 num인 경우 targetIndex로 저장
    if (i === num) targetIndex = index;

    // 방향에 맞춰서 index 추가 혹은 감소
    if (isRight) {
      index++;
    } else {
      index--;
    }
  }

  console.log({ arr, targetIndex });

  // targetIndex배열을 마지막 값부터 꺼내면서 num 상자 찾기(이때, 본인은 무조건 꺼내야하니까 1부터 시작)
  let cnt = 1;
  while (arr[targetIndex].pop() !== num) cnt++;

  return cnt;
}

console.log(solution(22, 6, 8)); //3
console.log(solution(13, 3, 6)); //4
