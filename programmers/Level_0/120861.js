function solution(keyinput, board) {
  return keyinput.reduce(
    (prev, curr) => {
      if (curr === "right" && prev[0] + 1 <= Math.floor(board[0] / 2))
        prev[0]++;
      else if (curr === "left" && prev[0] - 1 >= Math.ceil((board[0] / 2) * -1))
        prev[0]--;
      else if (curr === "up" && prev[1] + 1 <= Math.floor(board[1] / 2))
        prev[1]++;
      else if (curr === "down" && prev[1] - 1 >= Math.ceil((board[1] / 2) * -1))
        prev[1]--;

      return prev;
    },
    [0, 0]
  );
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); //[2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); //[0, -4]
