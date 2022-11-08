// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120910

function solution(n, t) {
    return Array.from({length: t}, (_, index) => {return index + 1}).reduce((previousValue) => {
        return previousValue * 2
    },n)
}

console.log(solution(2,10))
console.log(solution(7, 15))