function solution(my_string, num1, num2) {
  const array = my_string.split("");
  const key1 = array[num1];
  const key2 = array[num2];

  array[num1] = key2;
  array[num2] = key1;

  return array.join("");
}

console.log(solution("hello", 1, 2));
