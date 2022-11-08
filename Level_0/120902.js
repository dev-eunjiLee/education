// https://school.programmers.co.kr/learn/courses/30/lessons/120902
function solution(my_string) {

    // eval은 사용을 권장하지 않는다고 하여 다르게 구현

    let sum = 0;
    let operator = "+"
    my_string.split(' ').forEach((per) => {
        console.log(per)
        console.log(operator)
        if(per.match(/\+|-/g) !== null){
            operator = per
        } else {
            sum = operator === "+" ? sum + Number(per) : sum - Number(per)
        }

    })
    return sum
}

console.log(solution("3 + 4"))