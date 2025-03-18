function solution(lottos, win_nums) {
    var answer = [];

    const lottoSet = new Set(lottos)

    const LottoNumCnt = 6

    let sameNumCnt = 0
    let zeroCnt = getZeroCnt(lottoSet, LottoNumCnt)
    let sameFlag = false

    for(const perWinNum of win_nums){
        if(perWinNum === 0) {
            zeroCnt++;
            continue;
        }
        sameFlag = lottoSet.has(perWinNum) ? true : false
        if(sameFlag){
            sameNumCnt++;
        }
    }

    const minCnt = sameNumCnt
    const maxCnt = sameNumCnt + zeroCnt

    const minRank = getRank(minCnt);
    const maxRank = getRank(maxCnt);

    answer.push(maxRank, minRank)
    console.log(answer)

    return answer;
}

function getZeroCnt(lottoSet, LottoNumCnt){
    if(lottoSet.size === 1 && lottoSet.has(0)){
        zeroCnt = 6
    } else if(lottoSet.size === LottoNumCnt && lottoSet.has(0)) {
        zeroCnt = 1
    } else {
        zeroCnt = lottoSet.size !== LottoNumCnt ? LottoNumCnt - lottoSet.size + 1 : 0;
    }
    return zeroCnt
}

function getRank(cnt){
    let rank = 6;
    switch(cnt){
        case 6: rank = 1; break;
        case 5: rank = 2; break;
        case 4: rank = 3; break;
        case 3: rank = 4; break;
        case 2: rank = 5; break;

    }
    return rank
}

solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])