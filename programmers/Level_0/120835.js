function solution(emergency) {
  const answer = [];
  for (let i = 0; i < emergency.length; i++) {
    let rank = 1;
    const standard = emergency[i];
    for (let j = 0; j < emergency.length; j++) {
      if (standard < emergency[j]) rank++;
    }
    answer.push(rank);
  }
  return answer;
}

console.log(solution([3, 76, 24]));
