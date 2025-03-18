function solution(n) {
    return Number(n.toString().split('').sort((a,b) => {return b-a}).join(''))
}

console.log(solution(1234744))