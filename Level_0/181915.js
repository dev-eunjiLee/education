function solution(my_string, index_list) {
  const stringArr = [...my_string];
  return index_list
    .map((elem) => {
      return stringArr[elem];
    })
    .join("");
}

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
