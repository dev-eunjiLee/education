/**
 * link: https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */

function solution(s) {
    let deletedZeroCnt = 0, updatedCnt = 0;
    // const answer = [updatedCnt, deletedZeroCnt]; =>  배열안에 변수가 들어갈 경우, 해당 변수의 주소값이 참조되는게 아니라 원 데이터값이 들어가기 때문에 변수가 변경되더라도 배열 요소의 값이 달라지지 않는다. 그래서 이건 동작하지 않아 주석처리
    while(true){
        let oldS = s;
        let newS = s.replace(/0/g,'');
        deletedZeroCnt += oldS.length - newS.length;
        s = newS.length.toString(2);
        updatedCnt++;
        if(s === "1") {
            break
        }
    }
    return [updatedCnt, deletedZeroCnt]
}

console.log(solution("110010101001")) // [3,8]
console.log(solution("01110")) // [3,3]
console.log(solution("1111111")) // [4,1]