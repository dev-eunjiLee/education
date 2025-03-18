/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/120907
 */

function solution(quiz) {
  const answer = [];

  quiz.forEach((per) => {
    const char = per.split(" ");

    if (char[1] === "+") {
      answer.push(
        Number(char[0]) + Number(char[2]) === Number(char[4]) ? "O" : "X"
      );
    } else {
      answer.push(
        Number(char[0]) - Number(char[2]) === Number(char[4]) ? "O" : "X"
      );
    }
  });

  return answer;
}
