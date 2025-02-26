function solution(todo_list, finished) {
  const answer = [];
  for (let i = 0; i < todo_list.length; i++) {
    finished[i] === false ? answer.push(todo_list[i]) : undefined;
  }
  return answer;
}

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
);
