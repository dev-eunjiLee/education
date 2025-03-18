function solution(myStr) {
  let arr = myStr.split(/[a-c]/g).filter((elem) => elem !== "");
  if (arr.length === 0) arr.push("EMPTY");
  return arr;
}

console.log(solution("baconlettucetomato")); //	["onlettu", "etom", "to"]
console.log(solution("abcd")); //	["d"])
console.log(solution("cabab")); //	["EMPTY"]
