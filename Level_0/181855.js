function solution(strArr) {
  const obj = strArr.reduce((prev, curr) => {
    const cnt = curr.length;
    const value = prev?.[cnt];

    if (!value) {
      prev[cnt] = 0;
    }

    prev[cnt]++;

    return prev;
  }, {});

  console.log(obj);
  console.log(Object.values(obj));

  return Math.max(...Object.values(obj));
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
