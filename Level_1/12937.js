function solution(num) {
    const answer = (num%2 === 1 || num%2 === -1)? "Odd" : "Even"
    console.log(answer)
    return answer;
}

solution(-1);