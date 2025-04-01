console.log(y); // undefined > y의 선언은 밑에서 했지만 호이스팅되기 때문에 호출가능. 단 호이스팅될 때 변수는 undefined로 초기화된다
var y = 2;
console.log(y); // 2

console.log(z);
let z = 2;
console.log(z);
