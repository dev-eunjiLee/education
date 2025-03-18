function solution(array) {
  return array
    .map((per) => per.toString())
    .join("")
    .split("")
    .filter((per) => per === "7").length;
}
