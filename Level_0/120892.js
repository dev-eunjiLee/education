function solution(cipher, code) {
  return cipher
    .split("")
    .filter((elem, index) => {
      if ((index + 1) % code === 0) {
        return true;
      } else return false;
    })
    .join("");
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
