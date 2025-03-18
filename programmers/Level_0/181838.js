function solution(date1, date2) {
  console.log(new Date(date1[0], date1[1], date1[2]));
  console.log(new Date(date2[0], date2[1], date2[2]));
  return new Date(date1[0], date1[1], date1[2]) <
    new Date(date2[0], date2[1], date2[2])
    ? 1
    : 0;
}

console.log(solution([2021, 12, 28], [2021, 12, 29])); //1
