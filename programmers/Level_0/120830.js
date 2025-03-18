function solution(n, k) {

    const stickPrice = 12000;
    const juicePrice = 2000;

    const serviceJuiceCnt = Math.floor(n / 10);

    const totalPrice = n * stickPrice + (k - serviceJuiceCnt) * juicePrice

    return totalPrice;
}