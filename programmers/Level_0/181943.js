function solution(my_string, overwrite_string, s) {
  const arr = [...my_string];
  return [
    ...arr.slice(0, s),
    ...[...overwrite_string],
    ...arr.slice(s + overwrite_string.length),
  ].join("");
}

console.log(solution("He11oWor1d", "lloWorl", 2)); //"HelloWorld"
console.log(solution("Program29b8UYP", "merS123", 7)); //"ProgrammerS123"
