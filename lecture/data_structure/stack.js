// stack: 후입선출
class Stack {
  arr = [];

  push(value) {
    return this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  // Stack의 가장 마지막 원소 조회
  top() {
    return this.arr.at(-1); // === this.arr[arr.length - 1]
  }

  get length() {
    return this.arr.length;
  }
}

const stack = new Stack();
stack.push(1); // 1
stack.push(3); // 2
stack.push(5); // 3
stack.push(2); //4
stack.push(4); //5

console.log(stack.length); // 5

console.log(stack.pop()); // 4

console.log(stack.length); // 4

console.log(stack.top()); // 2
