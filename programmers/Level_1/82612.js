function solution(price, money, count) {
  const answer =
    money -
    [...Array(count).keys()].reduce((prev, curr) => {
      console.log(prev, curr, price);
      return prev + (curr + 1) * price;
    }, 0);

  return answer >= 0 ? 0 : Math.abs(answer);
}

console.log(solution(3, 20, 4));
