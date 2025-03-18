function solution(myString) {
  //   return myString.replaceAll(/[a-zA-Z]/g, (match) => {
  //     if (match === "a" || match === "A") return match.toUpperCase();
  //     else return match.toLowerCase();
  //   });
  return myString.toLowerCase().replaceAll("a", "A");
}

console.log(solution("abstract algebra"));
console.log(solution("PrOgRaMmErS"));
