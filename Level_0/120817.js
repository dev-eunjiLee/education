function solution(numbers) {
    return numbers.reduce((prev, curr) => {
        return prev + curr
    }, 0)/numbers.length
}