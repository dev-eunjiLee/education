// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
    people.sort((a,b) => b-a)
    let length = people.length
    let cnt = 0;
    let nullCnt = 0
    for (let i = 0; i <= length; i++){
        // 가장 큰 값, 가장 작은 값 더해서 limit 안이면 둘 다 없애고, 넘어가면 큰 값만 없앤다.
        if(limit >= people[i] + people[length-1]) {
            people.pop();
            length--;
        }
        // 배 숫자 ++
        cnt++;
        // 배열 길이 때문에 앞에서 빠진 경우 null로 변경
        people[i] = null
        // null로 바꾼 값 숫자 ++ 해서 배열 길이랑 같아지면 break
        nullCnt++;
        if(nullCnt === length) break
    }
    return cnt;
}

console.log(solution([70, 50, 80, 50],100)) // 3
console.log(solution([70, 80, 50],100)) // 3