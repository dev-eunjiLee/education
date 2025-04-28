// 숙제: Stack을 LinkedList로 구현하기(단, 시간복잡도는 O(1))
class Stack {
  tail = null;
  length = 0;

  // 가장 마지막에 노드 추가
  push(value) {
    // 새로운 tail이 될 node 생성
    const node = new Node(value);

    // 바꿔치기를 위해 현재 tail은 curr 변수에 저장
    const curr = this.tail;

    // 새로운 tail을 추가하기
    this.tail = node;
    this.tail.prev = curr;

    // stack의 길이 추가
    this.length++;

    // 길이 리턴
    return this.length;
  }

  // 가장 마지막 노드 제거
  pop() {
    if (!this.tail) {
      // tail이 없는 경우 pop할 값이 없기 때문에 아무 동작도 하지 않음
    } else {
      // pop될 node의 value를 변수에 저장 > 리턴 예정
      const value = this.tail?.value;

      // 현 tail의 prev 값을 변수에 할당 > 새 tail이 될 예정
      const prev = this.tail.prev;

      // 바꿔치기
      this.tail = prev;

      // stack의 길이 줄이기
      this.length--;

      // pop된 기존 tail의 value 리턴
      return value;
    }
  }

  // Stack의 가장 마지막 원소 조회
  top() {
    return this.tail?.value;
  }
}

class Node {
  prev = null;
  constructor(value) {
    this.value = value;
  }
}

const stack = new Stack();
console.log(stack);

console.log(stack.push(3)); // 1
console.log(stack.push(1)); // 2
console.log(stack.push(5)); // 3
console.log(stack.push(2)); //4
console.log(stack.push(4)); //5

console.log(stack.pop()); // 4 > pop된 가장 마지막 값 리턴
console.log(stack.top()); // 2
console.log(stack.pop()); // 2 > pop된 가장 마지막 값 리턴
console.log(stack.pop()); // 5 > pop된 가장 마지막 값 리턴
console.log(stack.pop()); // 1 > pop된 가장 마지막 값 리턴
console.log(stack.pop()); // 3 > pop된 가장 마지막 값 리턴
console.log(stack.pop()); // undefined

console.log(stack.top()); // undefined

console.log("stack");
