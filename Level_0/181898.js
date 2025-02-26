function solution(arr, idx) {
  let answer = -1;
  for (idx; idx < arr.length; idx++) {
    if (arr[idx] === 1) {
      answer = idx;
      break;
    }
  }
  return answer;
}

console.log(solution([0, 0, 0, 1], 1));
