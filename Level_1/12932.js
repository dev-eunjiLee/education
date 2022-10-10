function solution(n) {
    const answer = n.toString().split('').reverse().map(per => Number(per))
    return answer;
}

console.log(solution(12345))