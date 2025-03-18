function solution(myString) {
  const standard = "l".charCodeAt(0);

  return [...myString]
    .map((elem) => {
      if (standard > elem.charCodeAt(0)) return "l";
      else return elem;
    })
    .join("");
}

console.log(solution("abcdevwxyz"));
