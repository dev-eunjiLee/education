function solution(intStrs, k, s, l) {
  const X = [];

  intStrs.forEach((el, i) => {
    const value = Number(el.slice(s, s + l));
    if (k < value) {
      X.push(value);
    }
  });

  return X;
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
); // 5	[56789, 99999]
