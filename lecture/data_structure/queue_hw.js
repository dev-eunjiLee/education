// 숙제: Queue를 LinkedList로 구현하기(단, 시간복잡도는 O(1))
class Queue {
  head = null;
  tail = null;
  length = 0;

  // 가장 마지막에 노드 추가
  enqueue(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let currHead = this.head;
      while (currHead.next) {
        currHead = currHead.next;
      }
      currHead.next = node;
    }

    const currTail = this.tail;

    this.tail = node;
    this.tail.prev = currTail;

    this.length++;
    return this.length;
  }

  // 가장 맨 앞 노드 제거
  dequeue() {
    // head는 다음 값으로 변경
    const value = this.head.value;
    this.head = this.head.next;

    // tail에 연결된 가장 맨 앞 값 삭제 => 가장 맨 앞에서 두번째의 prev를 null로 만든다
    let currTail = this.tail;
    let prevTail;
    while (currTail?.prev) {
      prevTail = currTail;
      currTail = currTail.prev;
    }

    if (prevTail?.prev) {
      prevTail.prev = null;
    } else {
      this.tail = null;
    }

    this.length--;

    return value;
  }

  // Queue에서 가장 앞 쪽에 있는 값 조회
  peek() {
    return this.head.value;
  }
}

class Node {
  prev = null;
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const queue = new Queue();

console.log(queue.enqueue(1)); // 1
console.log(queue.enqueue(3)); // 2
console.log(queue.enqueue(5)); // 3
console.log(queue.enqueue(2)); // 4
console.log(queue.enqueue(4)); // 5

console.log(queue.peek()); // 1

console.log("dequeue");

console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // 5
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4

console.log("queue");
