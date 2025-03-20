function solution(nums) {
  const validLen = nums.length / 2;

  const newNums = [...new Set(nums)];

  return newNums.length > validLen ? validLen : newNums.length;
}

console.log(solution([3, 1, 2, 3])); //2
console.log(solution([3, 3, 3, 2, 2, 4])); //3
console.log(solution([3, 3, 3, 2, 2, 2])); //2
