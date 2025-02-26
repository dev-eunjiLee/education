function solution(names) {
  return names.filter((elem, index) => {
    if (index % 5 === 0) return true;
    else return false;
  });
}

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);
