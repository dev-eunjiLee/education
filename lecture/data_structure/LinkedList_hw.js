// 1. LinkedList의 삽입 시간복잡도를 O(1)으로 만들기
// 2. prev 필드 추가

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  // 노드 추가
  add(value) {
    const node = new Node(value);

    if (this.tail) {
      // tail이 있는 경우
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
      node.prev = curr;
      this.tail = node;
    } else {
      // tail이 없는 경우
      this.head = node;
      this.tail = node;
    }

    this.length++;
    return this.length;
  }

  // 노드 조회
  search(index) {
    let cnt = 0;
    let curr = this.head;
    while (cnt < index) {
      curr = curr?.next;
      cnt++;
    }

    return curr.value;
  }

  #search(index) {}

  // 노드 삭제
  remove(index) {
    let cnt = 0;
    let prev;
    let curr = this.head;
    while (cnt < index) {
      prev = curr;
      curr = curr?.next;
      cnt++;
    }

    const next = curr.next;

    prev.next = next;

    if (next) {
      next.prev = prev;
    } else {
      this.tail = prev;
    }
    this.length--;

    return this.length;
  }
}

class Node {
  prev = null;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

console.log(ll.search(0)); // 1
console.log(ll.search(1)); // 2
console.log(ll.search(2)); // 3

console.log(ll.remove(2)); // 3
console.log("hi");
