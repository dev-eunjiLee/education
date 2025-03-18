function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let x = arr1[i].toString(2);
    let y = arr2[i].toString(2);

    if (x.length < n) x = `${"0".repeat(n - x.length)}${x}`;
    if (y.length < n) y = `${"0".repeat(n - y.length)}${y}`;

    x = x.split("");
    y = y.split("");

    let line = "";
    for (let j = 0; j < n; j++) {
      if (x[j] === "1" || y[j] === "1") {
        line = `${line}#`;
      } else {
        line = `${line} `;
      }
    }

    answer.push(line);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); //["#####","# # #", "### #", "# ##", "#####"],
