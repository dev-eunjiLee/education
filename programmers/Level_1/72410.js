const onlyDot = '.'
const doubleDot = '..'

function solution(new_id) {

    let id = new_id
    id = convertIdToLowerCaseId(id) // 1
    id = removeSpecialCharInId(id) // 2
    id = convertMultiDotToOnlyDot(id) // 3
    id = removeFirstOrLastDotInId(id) // 4
    id = insertAIntoEmptyId(id) // 5
    id = sliceId(id) // 6
    id = addLastCharForShortId(id) // 7

    console.log(id)

    return id;
}

function convertIdToLowerCaseId(id){
    return id.toLowerCase()
}

function removeSpecialCharInId(id){
    let revisedId = ''
    const idCharList = id.split('')
    const regex =  /[a-z0-9\-\_\.]/
    for(const perChar of idCharList){
        if(perChar.match(regex)){
            revisedId += perChar
        }
    }
    return revisedId
}

function convertMultiDotToOnlyDot(id){
    let flag = true
    while(flag){
        flag = id.includes(doubleDot)
        if(flag){
            id = id.replace(doubleDot, onlyDot)
        }
    }
    return id
}

function removeFirstOrLastDotInId(id){
    if(id.includes(onlyDot)){
        const idCharArray = Array.from(id)
        if(idCharArray[0] === onlyDot){
            idCharArray[0] = ''
        }
        if(idCharArray[idCharArray.length-1] === onlyDot){
            idCharArray[idCharArray.length-1] = ''
        }
        id = idCharArray.join('')
    }
    return id
}

function insertAIntoEmptyId(id){
    if(id===""){
        id = "a"
    }
    return id
}

function sliceId(id){
    const idLengthStandard = 16
    if(id.length >= idLengthStandard){
        id = id.slice(0,idLengthStandard-1)
        id = removeFirstOrLastDotInId(id)
    }
    return id
}

function addLastCharForShortId(id){
    const shortIdStandard = 2
    let addFlag = true
    const lastIdChar = id.slice(id.length-1, id.length)
    while(addFlag){
        addFlag = id.length <= 2
        if(addFlag){
            id += lastIdChar
        }
    }
    return id
}

const new_id = "...!@BaT#*..y.abcdefghijklm"
solution(new_id);