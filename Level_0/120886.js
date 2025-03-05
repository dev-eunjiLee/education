function solution(before, after) {
  //   return before.split("").reverse().join("") === after ? 1 : 0;
  before.split("").map((elem) => {
    after = after.replace(elem, "");
  });
  if (after === "") return 1;
  else return 0;
}

console.log(solution("olleh", "hello")); // 1
console.log(solution("allpe", "apple")); // 0
console.log(solution("acaa", "aaca")); // 1
