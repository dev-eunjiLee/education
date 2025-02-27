function solution(str_list, ex) {
  return str_list
    .filter((elem) => {
      return elem.includes(ex) === false ? true : false;
    })
    .join("");
}

console.log(solution(["abc", "def", "ghi"], "ef"));
