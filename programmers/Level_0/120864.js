function solution(my_string) {
  const arr = my_string.split("");
  const answerArr = [];
  let value = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!Number.isNaN(Number(arr[i]))) {
      value = `${value}${arr[i]}`;
    } else {
      if (value !== "") {
        answerArr.push(Number(value));
        value = "";
      }
    }
  }
  if (value !== "") {
    answerArr.push(Number(value));
    value = "";
  }
  return answerArr.reduce((prev, curr) => {
    return curr + prev;
  }, 0);
}

console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("a")); // 0
console.log(solution("a9")); // 9

function solution2(my_string) {
  return my_string.split(/\D+/).reduce((prev, curr) => prev + Number(curr), 0);
}

console.log(solution2("aAb1B2cC34oOp")); // 37
console.log(solution2("a")); // 0
console.log(solution2("a9")); // 9
