/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */

function solution(n){
    let answer = 1; // 본인인 경우
    if (n===1) return answer // n이 1인 경우 계산할 필요없이 여기서 끝내면 된다
    for(let i = 1; i<=n; i++){
        let tempSum = 0;
        if(tempSum === n) break;
        for(let j = i; j<=Math.ceil(n/2); j++){
            console.log(i,j)
            tempSum += j
            if(tempSum > n) break;
            if(tempSum === n) {
                answer++;
                break;
            }
        }
    }
    return answer
}
console.log(solution(1))