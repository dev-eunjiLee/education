function solution(my_strings, parts) {
  return my_strings
    .map((elem, index) => {
      return elem.slice(parts[index][0], parts[index][1] + 1);
    })
    .join("");
}

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
