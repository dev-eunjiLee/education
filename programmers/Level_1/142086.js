function solution(s) {
  return s.split("").map((elem, index) => {
    let answer = -1;
    if (index !== 0) {
      for (let i = index - 1; i >= 0; i--) {
        if (s[i] === elem) {
          answer = index - i;
          break;
        }
      }
    }
    return answer;
  });
}

console.log(solution("banana")); //[-1, -1, -1, 2, 2, 2]
// console.log(solution("foobar")); //[-1, -1, 1, -1, -1, -1]

function solution2(s) {
  const hash = {};

  return [...s].map((elem, index) => {
    let result = -1;

    const originIndex = hash[elem];

    if (originIndex !== undefined) {
      result = index - originIndex;
    }

    hash[elem] = index;
    return result;
  });
}

console.log(solution2("banana")); //[-1, -1, -1, 2, 2, 2]
console.log(solution2("foobar")); //[-1, -1, 1, -1, -1, -1]
