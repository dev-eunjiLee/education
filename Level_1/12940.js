function solution(n, m) {

    let greatestCommonFactor = 0; // 최대공약수
    let leastCommonMultiple = 0; // 최소공배수

    let [smallNum, bigNum] = n < m ? [n,m] : [m,n]

    // 최대공약수(둘 중 작은 수에서 --1하면서 확인)
    greatestCommonFactor = smallNum
    // 최대공약수
    for(greatestCommonFactor; greatestCommonFactor > 0; greatestCommonFactor--){
        console.log(greatestCommonFactor)
        if(smallNum % greatestCommonFactor === 0 && bigNum % greatestCommonFactor ===0){
            break;
        }
    }

    // 최소공배수(둘 중 큰 수에서 ++1 하면서 확인)
    leastCommonMultiple = bigNum
    for(leastCommonMultiple; leastCommonMultiple < leastCommonMultiple * smallNum; leastCommonMultiple++){
        if(leastCommonMultiple % smallNum === 0 && leastCommonMultiple % bigNum ===0){
            break;
        }
    }

    const answer = [greatestCommonFactor, leastCommonMultiple];
    return answer;
}

console.log(solution(3,12))