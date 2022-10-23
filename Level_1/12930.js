function solution(s) {
  console.log(s);

  const answer = s
    .split(" ")
    .map((keyword) => {
      console.log(keyword);
      const changedKeyword = keyword
        .split("")
        .map((char, index) => {
          if (index % 2 === 0) {
            return char.toUpperCase();
          } else {
            return char.toLowerCase();
          }
        })
        .join("");
      console.log(changedKeyword);
      return changedKeyword;
    })
    .join(" ");

  return answer;
}

console.log(solution("try hello world"));
