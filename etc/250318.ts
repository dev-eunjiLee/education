/**
 * 문제내용
 * - 배열이 주어졌을 때, 양 옆에 인접한 값 2개 혹은 1개와 비교했을 때, 더 값이 큰 경우를 하이라이트라고 한다.
 * - 현 배열의 하이라이트 값에서 가장 작은 값의 index를 순서대로 리턴한다.
 * - 단 현 배열의 하이라이트 중 가장 작은 값이 빠지고 나면 하이라이트는 새롭게 다시 정의된다.
 */

type index = number;

function* before(
  n: number,
  arr: Array<number | undefined>
): Iterator<{ index: number; value: number | undefined }> {
  while (n >= 0) {
    n--;
    yield {
      index: n,
      value: arr[n],
    };
  }
}

function* after(
  n: number,
  arr: Array<number | undefined>
): Iterator<{ index: number; value: number | undefined }> {
  while (true) {
    n++;
    yield {
      index: n,
      value: arr[n],
    };
  }
}

function solution(arr: Array<number>): Array<number> {
  // 기존 배열을 깊은 복사
  const copied: Array<number | undefined> = [...arr];

  // 정답이 들어갈 배열
  const answer: Array<number> = [];

  // 복사한 배열(이하 copied)의 원소들은 최소 하이라이트로 선정될 때 마다 undefined로 변경되기 때문에 undefined를 개수를 세서 반복문 진행 여부를 결정
  while (copied.filter((elem) => elem === undefined).length !== arr.length) {
    // copied에서 undefined로 변경될 최소 하이라이트의 값을 담을 객체
    let minHighLight!: { index: number; value: number };

    // copied 객체를 돌면서, undefined를 제외하고서 각 기준값의 좌, 우 값을 확인하여 최소 하이라이트 값을 확인
    for (let i = 0; i < copied.length; i++) {
      let left, center, right;

      center! = { index: i, value: copied[i] };

      // 현재 값이 배열에 undefined인 경우(이미 하이라이트로 빠진 경우)
      if (center.value === undefined) {
        continue;
      }

      // 좌측 값 구하기
      const getLeft = before(i, copied);
      while (left?.value === undefined) {
        left = getLeft.next().value;
        if (left.index === -1) break;
      }

      // 우측 값 구하기
      const getRight = after(i, copied);
      while (right?.value === undefined) {
        right = getRight.next().value;
        if (right.index === arr.length) break;
      }

      //   console.log({ left, center, right });

      // 하이라이트인 경우
      if (
        (center.value - left.value > 0 && center.value - right.value > 0) || // 중간에 끼인 값이면서 양 옆 값이 본인보다 작은 경우
        (left.value === undefined && center.value > right.value) || // 가장 왼쪽에 있는 값이면서, 바로 오른쪽 값이 본인보다 작은 경우
        (right.value === undefined && center.value > left.value) || // 가장 오른쪽에 있는 값이면서, 바로 왼쪽 값이 본인보다 작은 경우
        (right.value === undefined && left.value === undefined) // 값이 하나밖에 안남은 경우
      ) {
        if (minHighLight === undefined || minHighLight.value > center.value) {
          minHighLight = center as { index: number; value: number };
        }
      }
    }

    copied[minHighLight.index] = undefined;
    answer.push(minHighLight.index);
  }
  return answer;
}

console.log(solution([1, 3, 2, 3, 5])); // [1, 4, 3, 2, 0]
