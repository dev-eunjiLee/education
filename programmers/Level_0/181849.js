function solution2(num_str) {
  let answer = 0;
  for (const elem of num_str.split("")) {
    answer += Number(elem);
  }
  return answer;
}

console.log(solution2("123456789"));
console.log(solution2("1000000"));
