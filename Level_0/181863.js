function solution(rny_string) {
  return rny_string.replaceAll(/m/g, "rn");
}

console.log(solution("masterpiece"));
