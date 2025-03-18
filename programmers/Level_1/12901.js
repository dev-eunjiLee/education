function solution(a, b) {
    const WEEKDAY = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const date = new Date(2016,a-1,b).getDay()
    const answer = WEEKDAY[date]
    return answer;
}

console.log(solution(5,24))