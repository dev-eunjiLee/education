function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((elem) => elem !== "");
}

console.log(solution("axbxcxdx"));
