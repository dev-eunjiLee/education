function solution(strArr) {
  return strArr.map((elem, index) => {
    return index % 2 === 0 ? elem.toLowerCase() : elem.toUpperCase();
  });
}

console.log(solution(["AAA", "BBB", "CCC", "DDD"]));
