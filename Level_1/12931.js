function solution(n)
{

    const answer = n.toString().split('').reduce((curr, prev) => {
        return curr + Number(prev)
    }, 0)

    return answer;
}

console.log(solution(123))