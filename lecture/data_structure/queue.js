// queue: 선입선출
class Queue {
  arr = [];

  enqueue(value) {
    return this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }

  // Queue에서 가장 앞 쪽에 있는 값(===first)
  peek() {
    return this.arr.at(0);
  }

  get length() {
    return this.arr.length;
  }
}

const queue = new Queue();
queue.enqueue(1); // 1
queue.enqueue(3); // 2
queue.enqueue(5); // 3
queue.enqueue(2); //4
queue.enqueue(4); //5

console.log(queue.length); // 5

console.log(queue.dequeue()); // 1

console.log(queue.length); // 4

console.log(queue.peek()); // 3
