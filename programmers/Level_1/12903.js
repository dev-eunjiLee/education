function solution(s) {
    var answer = '';

    const length = s.length;
    const halfIndex = Math.floor(length / 2)

    answer = length%2 === 1 ? s.split('')[halfIndex] : s.split('')[halfIndex-1]+s.split('')[halfIndex]

    console.log(answer)

    return answer;
}

solution('abcde')