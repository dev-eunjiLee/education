function solution(angle) {
    let angleValue = 0;
    switch(true){
        case 0 < angle && angle < 90:
            console.log(angle, 'here')
            angleValue = 1;
            break;
        case angle === 90:
            angleValue = 2;
            break;
        case 90 < angle && angle < 180:
            angleValue = 3;
            break;
        case angle === 180:
            angleValue = 4;
            break;
    }
    return angleValue
}