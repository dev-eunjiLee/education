function solution(strArr) {
  return strArr.filter((elem) => {
    return elem.indexOf("ad") === -1;
  });
}

console.log(solution(["and", "notad", "abcd"]));
