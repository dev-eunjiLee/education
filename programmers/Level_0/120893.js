function solution(my_string) {
  return my_string
    .split("")
    .map((elem) => {
      const upper = elem.toUpperCase();
      return upper === elem ? elem.toLowerCase() : upper;
    })
    .join("");
}

console.log(solution("cccCCC"));
