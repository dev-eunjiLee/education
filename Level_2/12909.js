// quiz link: https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
    const charList = s.split('');
    let openBracketCnt = 0
    for(const char of charList){
        if(openBracketCnt === 0 && char === ")"){
            // 이미 닫혀있는데 또 닫는 괄호가 나온 경우
            openBracketCnt = -1;
            break;
        } else {
            openBracketCnt = char === "(" ? openBracketCnt + 1 : openBracketCnt - 1
        }
    }
    const flag = openBracketCnt === 0
    return flag;
}