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

    if (!curr) {
      // 삭제하려는 index에 값이 없는 경우 > 아무것도 하지 않음
    } else {
      // 다음 노드를 변수에 할당
      const next = curr?.next;

      // 과거 노드의 다음을 현재에서 다음으로 변경
      prev.next = next;

      // 만약 다음 노드가 있다면, 다음 노드의 과거도 현재에서 과거로 변경. 만약 next가 없다면 꼬리라는 소리니까 꼬리값을 과거로 변경
      if (next) {
        next.prev = prev;
      } else {
        this.tail = prev;
      }

      this.length--;

      return this.length;
    }
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
console.log(ll.remove(2)); // 2
console.log(ll.remove(2)); // undefined
console.log("hi");
