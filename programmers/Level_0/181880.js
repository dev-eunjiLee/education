function solution(num_list) {
  return num_list.reduce((prev, curr) => {
    let cnt = 0;
    while (curr > 1) {
      if (curr % 2 === 0) {
        curr = curr / 2;
      } else {
        curr = (curr - 1) / 2;
      }
      cnt++;
    }
    return prev + cnt;
  }, 0);
}

console.log(solution([12, 4, 15, 1, 14])); // 11
