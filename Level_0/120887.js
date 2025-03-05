function solution(i, j, k) {
  let keyword = "";
  for (i; i <= j; i++) {
    keyword = `${keyword}${i}`;
  }
  return keyword.split("").filter((elem) => {
    return Number(elem) === k;
  }).length;
}

console.log(solution(1, 13, 1)); // 6
