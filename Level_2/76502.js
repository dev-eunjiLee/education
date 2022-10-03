function solution(s) {

    let changedInput = s;
    const length = s.length

    let openCharInsertList = []

    const bracketObj = {
        "}": "{",
        "]": "[",
        ")": "(",
    }

    let rightCnt = 0;

    const openCharSet = new Set(Object.values(bracketObj))


    for(let i = 0; i < length; i++){

        let flag = true

        for(const [index, char] of changedInput.split('').entries()){
            if(openCharSet.has(char)){
                // 1. openChar
                openCharInsertList.push(char)
            } else {
                // 2. closeChar
                if(openCharInsertList.length === 0){
                    // 2-1. 닫을게 없는데 닫는 경우 false
                    flag =  false
                    break;
                } else {
                    // 2-2. 닫을게 있어서 닫는 경우 true, 직전에 char가 짝이 되는 openChar여야 한다
                    if(openCharInsertList[openCharInsertList.length-1] !== "{" && char === "}"){
                        flag =  false
                        break;
                    } else if(openCharInsertList[openCharInsertList.length-1] !== "[" && char === "]"){
                        flag =  false
                        break;
                    } else if(openCharInsertList[openCharInsertList.length-1] !== "(" && char === ")"){
                        flag =  false
                        break;
                    }
                    openCharInsertList.pop()

                }

            }

        }

        if(openCharInsertList.length !== 0){
            flag = false
        }


        if(flag){
            rightCnt +=1 ;
        }

        // * 새로운 글자 셋팅
        const firstCharOfInput = changedInput.slice(0,1);
        const lastCharListOfInput = changedInput.slice(1,length);
        changedInput = lastCharListOfInput + firstCharOfInput

        openCharInsertList = []

    }

    return rightCnt

}