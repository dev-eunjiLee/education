function solution(myString, pat) {
  return myString
    .replaceAll("A", "a")
    .replaceAll("B", "A")
    .replaceAll("a", "B")
    .indexOf(pat) === -1
    ? 0
    : 1;
}

console.log(solution("ABBAA", "AABB"));
