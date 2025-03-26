function solution(numbers, hand) {
  let left = [0, 3]; // * > 가로 0번째 세로 3번째에 "*" 이 있다
  let right = [2, 3]; // # > 가로 2번째 새로 3번째에 "#"이 있다
  return numbers
    .map((elem) => {
      // x: x좌표(왼쪽인 경우 0, 중간은 1, 오른쪽은 2)
      // y: y좌표(위에서부터 0, 1, 2, 3)
      // direction: 왼쪽 또는 오른쪽
      let x, y, direction;

      if ([1, 4, 7].includes(elem)) {
        y = [1, 4, 7].indexOf(elem);
        x = 0;
        direction = "L";
      } else if ([3, 6, 9].includes(elem)) {
        y = [3, 6, 9].indexOf(elem);
        x = 2;
        direction = "R";
      } else {
        x = 1;
        y = [2, 5, 8, 0].indexOf(elem);

        // 오른손 혹은 왼손의 현재 위치가 가운데일수 있기 때문에 x 및 y의 거리값 모두 확인
        const leftDiff = Math.abs(y - left[1]) + Math.abs(x - left[0]);
        const rightDiff = Math.abs(y - right[1]) + Math.abs(x - right[0]);

        direction =
          leftDiff > rightDiff
            ? "R"
            : leftDiff < rightDiff
            ? "L"
            : hand === "right"
            ? "R"
            : "L";
      }

      if (direction === "R") {
        right = [x, y];
      } else {
        left = [x, y];
      }

      return direction;
    })
    .join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); //"LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); //"LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); //"LLRLLRLLRL"
