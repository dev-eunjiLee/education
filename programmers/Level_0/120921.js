function solution(A, B) {
  let answer = -1;

  const push = (word) => {
    return [word[word.length - 1]].concat(word.slice(0, word.length - 1));
  };

  if (A === B) {
    answer = 0;
  } else {
    let word = A.split("");
    for (let i = 1; i <= word.length; i++) {
      word = push(word);
      if (B === word.join("")) {
        answer = i;
        break;
      }
    }
  }

  return answer;
}
console.log(solution("hello", "ohell")); //	1
console.log(solution("apple", "elppa")); //	-1
console.log(solution("atat", "tata")); //	1
console.log(solution("abc", "abc")); //0

function solution2(A, B) {
  return `${B}${B}`.indexOf(A);
}
console.log(solution2("hello", "ohell")); //	1
console.log(solution2("apple", "elppa")); //	-1
console.log(solution2("atat", "tata")); //	1
console.log(solution2("abc", "abc")); //0
