/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12953
 */

function solution(arr) {
    let answer = 0;
    const min = Math.max(...arr)
    const max = arr.reduce((prev, curr) => {
        return prev * curr
    })
    for(let i = min; i <= max; i++){
        if(arr.filter((per) => {
            return i % per === 0
        }).length === arr.length) {
            answer = i
            break;
        }
    }
    return answer;
}

console.log(solution([2,6,8,14])) // 168
console.log(solution([1,2,3])) // 6