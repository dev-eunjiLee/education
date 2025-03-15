function solution(numbers) {
  const result = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(result).sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); //[2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); //[2,5,7,9,12]
