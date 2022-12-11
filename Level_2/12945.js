/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */

function solution(n) {
    let answer = 0;
    const F = Array.from({length: n}).fill(0)
    F[0] = 0
    F[1] = 1
    for(let i = 2; i <= n; i++){
        F[i] = (F[i-1] + F[i-2]) % 1234567
    }
    return F[n]
}