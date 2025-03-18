function solution(X, Y) {

    const xList = X.split('')
    const yList = Y.split('')

    let duplicatedNumber = ''

    for(let i = 9; i >= 0; i--){

        const regex = new RegExp(`${i}`, "g")

        const xIndexCnt = X.match(regex)?.length || 0;
        const yIndexCnt = Y.match(regex)?.length || 0;

        const realIndexCnt = xIndexCnt <= yIndexCnt ? xIndexCnt : yIndexCnt

        for(let a = 0; a < realIndexCnt; a++){
            duplicatedNumber += i.toString()
        }
    }

    duplicatedNumber = duplicatedNumber === '' ? "-1"
        : duplicatedNumber[0] === "0" ? "0"
            : duplicatedNumber

    return duplicatedNumber;
}