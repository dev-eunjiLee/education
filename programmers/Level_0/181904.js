function solution(my_string, m, c) {
  const arr = [];
  my_string.split("").forEach((elem, index) => {
    const mainI = Math.floor(index / m);
    if (!arr[mainI]) {
      arr.push([]);
    }

    arr[mainI].push(elem);
  });
  return arr
    .map((elem) => {
      return elem[c - 1];
    })
    .join("");
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
