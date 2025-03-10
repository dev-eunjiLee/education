function solution(str_list) {
  let lI = str_list.indexOf("l");
  let rI = str_list.indexOf("r");

  const direction =
    lI === -1 && rI === -1
      ? null
      : rI !== -1 && (rI < lI || lI === -1)
      ? "r"
      : "l";

  let arr = [];
  if (direction === "r") {
    arr = str_list.slice(rI + 1);
  } else if (direction === "l") {
    arr = str_list.slice(0, lI);
  }
  return arr;
}

console.log(solution(["u", "u", "l", "r"])); //["u", "u"]
console.log(solution(["r", "u", "u", "l", "r"])); //["u", "u", "l", "r"]
console.log(solution(["u", "u", "r"])); //[]
console.log(solution(["l"])); //[]
console.log(solution(["u", "l"])); //[u]
console.log(solution(["r"])); //[]
console.log(solution(["u", "d"])); //[]
console.log(solution(["r", "l"])); //["l"]
console.log(solution(["l", "r"])); //[]
console.log(solution(["r", "u", "d", "d"])); //["u", "d", "d"]

console.log("===========================================");

function solution2(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    const value = str_list[i];

    if (value === "r") return str_list.slice(i + 1);
    else if (value === "l") return str_list.slice(0, i);
  }
  return [];
}

console.log(solution2(["u", "u", "l", "r"])); //["u", "u"]
console.log(solution2(["r", "u", "u", "l", "r"])); //["u", "u", "l", "r"]
console.log(solution2(["u", "u", "r"])); //[]
console.log(solution2(["l"])); //[]
console.log(solution2(["u", "l"])); //[u]
console.log(solution2(["r"])); //[]
console.log(solution2(["u", "d"])); //[]
console.log(solution2(["r", "l"])); //["l"]
console.log(solution2(["l", "r"])); //[]
console.log(solution2(["r", "u", "d", "d"])); //["u", "d", "d"]
