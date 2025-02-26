function solution(my_string) {
  let sum = 0;
  //   for (const elem of my_string.split("")) {
  for (const elem of [...my_string]) {
    const convertedElem = Number(elem);
    if (!isNaN(convertedElem)) {
      sum += convertedElem;
    }
  }

  return sum;
}

console.log(solution("aAb1B2cC34oOp"));
