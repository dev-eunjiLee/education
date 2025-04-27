class LinkedList {
  length = 0;

  // 맨 처음 노드
  head = null;

  // 추가
  add(value) {
    if (this.head) {
      let current = this.head;
      // next가 없을 때 까지 반복문을 진행하여, next가 없는 node에 next를 넣어줘야한다.
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      // head가 비어있는 경우
      this.head = new Node(value);
    }

    // 노드가 추가된 후 length에 값 추가
    this.length++;

    // 사용자가 add후 길이를 확인할 수 있도록 length를 리턴
    // 함수의 리턴값은 유의미한 어떤 값인게 좋다
    return this.length;
  }

  // #을 붙이면 private 함수
  // index를 이용해 조회하는 함수
  #search(index) {
    let count = 0;
    let prev; // 과거 노드
    let current = this.head;
    while (count < index) {
      // 현재 노드는 과거 노드가 되고, 미래 노드는 현재 노드가 된다
      prev = current;
      // current가 없는 경우가 있기 때문에(node가 하나도 없는 경우) 옵셔널 체이닝 추가
      current = current?.next;
      count++;
    }
    return [prev, current];
  }

  // 조회 - index번째 값을 리턴
  search(index) {
    // current가 없을 수 있으니까 옵셔널 체이닝
    return this.#search(index)[1]?.value;
  }

  // 삭제 - index번째 값을 제거(예외처리, 데이터가 없는 경우)
  // 앞 노드의 next를 현재 index의 다음 노드로 바꿔줘야한다.
  remove(index) {
    const [prev, current] = this.#search(index);

    if (prev && current) {
      // LinkedList의 중간값이어서 과거, 현재 노드가 모두 있는 경우
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // 과거 노드가 없는 경우: 가장 맨 앞 노드를 삭제하려는 경우      this.head = current.next;
      this.length--;
      return this.length;
    } else {
      // 삭제하고자하는 대상이 없는 경우(current가 없는 경우. LinkedList가 비어있거나 해당 인덱스의 값이 없거나!)
      // 아무것도 안함
    }
  }
}

// node: 자료 구조에서 하나의 [객체/아이템]을 주로 노드로 지칭한다.
// 우리 예시의 LinkedList는 여러개의 노드를 연결한 자료구조이다.
class Node {
  constructor(value) {
    this.value = value;
  }
  // 다음값
  next = null;
}

const ll = new LinkedList();

// ll.add
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6); // ll.length = 6

// ll.search
ll.search(3); // 4
ll.search(5); // 6
ll.search(7); // undefined

// ll.remove
console.log(ll.remove(4)); // 5
console.log(ll.remove(4)); // 4
console.log(ll.remove(4)); // undefined
