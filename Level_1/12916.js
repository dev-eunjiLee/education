function solution(s){

    let sCnt = 0;
    let yCnt = 0;

    [sCnt, yCnt] = s.toLowerCase().split('').reduce((curr, prev) => {
        return prev === 'p' ? [curr[0]+1, curr[1]]
            : prev === 'y' ? [curr[0], curr[1]+1]
                : [curr[0], curr[1]]
    }, [sCnt, yCnt])
    const answer = sCnt === yCnt

    return answer;
}

console.log(solution('pPyY'))