function solution(numbers) {

    const numSet = new Set([0,1,2,3,4,5,6,7,8,9])

    numbers.forEach((per) => {
        numSet.delete(per)
    })

    const answer = Array.from(numSet).reduce((curr, prev) => {
        return curr + prev
    }, 0)

    return answer;
}

console.log(solution([1,3,5]))