function solution(my_string, indices) {
  return my_string
    .split("")
    .filter((elem, index) => {
      if (indices.includes(index)) return false;
      else return true;
    })
    .join("");
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // "programmers"
