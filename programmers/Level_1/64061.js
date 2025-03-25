function solution(board, moves) {
  const stack = [];
  let cnt = 0;

  moves.forEach((elem) => {
    // elem에 해당하는 인형을 뽑아서 바구니(stack)에 넣기
    for (let i = 0; i < board.length; i++) {
      const line = board[i];

      if (line[elem - 1] === 0) continue;
      else {
        stack.push(line[elem - 1]);
        line[elem - 1] = 0;
        break;
      }
    }

    // stack에 인형이 들어있고, 마지막 인형 2개가 같은 값인 경우 stack에서 제거 및 cnt에 2만큼 추가
    if (
      stack.length > 0 &&
      stack[stack.length - 1] === stack[stack.length - 2]
    ) {
      stack.pop();
      stack.pop();
      cnt += 2;
    }
  });

  return cnt;
}

console.log(
  solution(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [1, 2, 3, 4]
  )
); // 0

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); //4

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1]
  )
); //0

console.log(
  solution(
    [
      [1, 0, 0, 0, 0],
      [2, 0, 0, 0, 0],
      [2, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [3, 0, 0, 0, 0],
    ],
    [1, 1, 1, 1]
  )
); // 4

console.log(
  solution(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [1, 2, 2, 1],
    ],
    [2, 3, 1, 4, 2, 3]
  )
); // 6
