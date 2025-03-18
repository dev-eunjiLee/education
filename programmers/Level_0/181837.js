function solution(order) {
  return order.reduce((prev, curr) => {
    if (curr.includes("cafelatte")) prev += 5000;
    else prev += 4500;
    return prev;
  }, 0);
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
); // 19000
console.log(solution(["americanoice", "americano", "iceamericano"])); // 13500
