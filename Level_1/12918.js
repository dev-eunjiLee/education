function solution(s) {
    return ((s.length === 4 || s.length === 6) && parseInt(s) == s)
}

console.log(solution("3a99"))