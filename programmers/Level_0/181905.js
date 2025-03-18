function solution(my_string, s, e) {
  const answer = []; // 답변이 들어갈 배열
  let right = e; // 가장 오른쪽. 해당 범위일 때 하나씩 앞으로 넘어온다
  for (let i = 0; i < my_string.length; i++) {
    if (i >= s && i <= e) {
      const value = my_string[right--];
      answer.push(value);
    } else {
      answer.push(my_string[i]);
    }
  }
  return answer.join("");
}

console.log(solution("Progra21Sremm3", 6, 12)); // ProgrammerS123
