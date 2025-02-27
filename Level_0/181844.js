function solution(arr, delete_list) {
  const answer = [];

  for (let x = 0; x < arr.length; x++) {
    let value = arr[x];
    for (let y = 0; y < delete_list.length; y++) {
      if (arr[x] === delete_list[y]) {
        value = null;
        break;
      }
    }
    if (value !== null) {
      answer.push(value);
    }
  }

  return answer;
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [293, 395, 678]
