function solution(numbers, direction) {
  if (direction === "right") {
    return [
      numbers[numbers.length - 1],
      ...numbers.slice(0, numbers.length - 1),
    ];
  } else {
    return [...numbers.slice(1, numbers.length), numbers[0]];
  }
}

console.log(solution([1, 2, 3], "right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
