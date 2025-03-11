function solution(my_string, queries) {
  let arr = my_string.split("");
  queries.forEach(([s, e]) => {
    arr = [
      ...arr.slice(0, s),
      ...arr.slice(s, e + 1).reverse(),
      ...arr.slice(e + 1),
    ];
  });
  return arr.join("");
}
console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
); //	"programmers"
