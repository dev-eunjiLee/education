// ===== copy & paste from binarySearchTree.js ===== //
class BinarySearchTree {
  root = null;
  length = 0;

  #insert(node, value) {
    if (node.value > value) {
      // 노드보다 작은 값이면 왼쪽
      if (node.left) {
        this.#insert(node.left, value);
      } else {
        node.left = new Node(value);
      }
    } else if (node.value < value) {
      // 노드보다 큰 값이면 오른쪽
      if (node.right) {
        this.#insert(node.right, value);
      } else {
        node.right = new Node(value);
      }
    } else {
      throw new Error(
        `이미 트리에 들어있는 값(${value})은 추가할 수 없습니다.`
      );
    }
  }

  /**
   * 어떤 값을 트리에 넣으려고 할 때,
   * 정확한 값을 바로 찾을 수 없기 때문에 left(or right)에게 위임하고
   * 만약 위임할 left(또는 right)가 없으면 거기에 위임한다(재귀 사용)
   */
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.#insert(this.root, value);
    }
    // 이미 있는 값인 경우 Error로 빠지기 때문에 여기에서 length++ 해줘도 된다.
    this.length++;
  }

  #search(node, value) {
    if (node.value > value) {
      // 노드를 기준으로 왼쪽을 조회해야 하는데,
      // 1. 왼쪽에 값이 없는 경우
      if (!node.left) {
        return null;
      }
      // 2. 왼쪽에 이미 들어있는 값과 일치하는 경우
      if (node.left.value === value) {
        return node.left;
      }
      // 3. 왼쪽에 값이 있고, 그 값이 value와 다른 경우, 왼쪽 노드에 위임
      return this.#search(node.left, value);
    } else {
      if (!node.right) {
        return null;
      }
      if (node.right.value === value) {
        return node.right;
      }
      return this.#search(node.right, value);
    }
  }

  /**
   * 어떤 값을 트리에서 찾으려고 할 때,
   * 정확한 값을 바로 찾을 수 없기 때문에 left(or right)에게 위임하고
   * 만약 위임할 left(또는 right)가 없으면 거기에 위임한다(재귀 사용)
   * 찾으면 그 찾은 노드를 못찾은 경우 null을 리턴
   */
  search(value) {
    // root가 없는 경우 null 리턴
    if (!this.root) {
      return null;
    }

    if (this.root.value === value) {
      return this.root;
    }

    return this.#search(this.root, value);
  }

  /**
   * 1. leaf인 경우: 제거
   * 2. leaf가 아니고, 왼쪽 자식이 없는 경우: 오른쪽을 끌어올린다
   * 3. leaf가 아니고, 오른쪽 자식이 없는 경우: 왼쪽을 끌어올린다
   * 4. leaf가 아니고 좌우 자식이 모두 있는 경우: 왼쪽에서 가장 큰 값과 바꾼 후 제거
   */
  remove(value) {
    this.root = this.#remove(this.root, value);

    // TODO
    return this.length;
  }

  #remove(node, value) {
    if (!node) {
      // 제거할 값이 bst에 없는 경우(지울 값이 존재하지 않는 경우)
      // return null;
      throw new Error(`트리에 있는 값만 삭제할 수 있습니다(입력값: ${value})`);
    }
    if (node.value === value) {
      this.length--;
      // * ===== 지울 값을 찾은 자식의 입장 ===== * //
      if (!node.left && !node.right) {
        // leaf인 경우 > 부모에게 삭제를 요청해야하는 경우
        return null;
      } else if (!node.left) {
        // 오른팔만 있는 노드를 삭제해야하는 경우 > 오른팔을 끌어올려야함
        return node.right;
      } else if (!node.right) {
        // 왼팔만 있는 노드를 삭제해야하는 경우 > 왼팔을 끌어올려야함
        return node.left;
      } else {
        // leaf가 아니고 왼팔, 오른팔 다 있는 경우(왼팔에서 가장 큰 값(오른쪽의 오른쪽의 오른쪽의 오른쪽 값)과 바꾼 후 제거)
        let exchange = node.left;
        while (exchange.right) {
          exchange = exchange.right;
        }
        // 현 node의 value와 왼쪽에서 가장 큰 값(오른쪽의 오른쪽의 오른쪽.... 값)과 서로 바꿔치기
        [node.value, exchange.value] = [exchange.value, node.value];

        node.left = this.#remove(node.left, exchange.value);
        return node;
      }
    } else {
      // * ===== 결정을 넘겨야하는 부모의 입장 ===== * //
      if (node.value > value) {
        // 부모의 value보다 작은 값을 찾는 경우 > 부모 기준 왼쪽에서 서칭 후 잘라내기
        node.left = this.#remove(node.left, value);
        return node;
      } else {
        node.right = this.#remove(node.right, value);
        return node;
      }
    }
  }
}

// ===== copy & paste from binarySearchTree.js ===== //
class Node {
  right = null;
  left = null;

  constructor(value) {
    this.value = value;
  }
}

const bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

function bfs(tree) {
  // ===== copy & paste from queue.js ===== //
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

  queue.enqueue(tree.root);
  while (queue.length > 0) {
    const node = queue.dequeue();
    console.log(node.value);
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
}

console.log("bfs 출력 예시: [4,2,6,1,3,5,7]");
bfs(bst);

function dfs(tree) {
  // ===== copy & paste from stack.js ===== //
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
  stack.push(tree.root);
  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.value);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}

console.log("dfs 출력 예시: [4,2,1,3,6,5,7] === pre-order 순회");
dfs(bst);

function preOrder(node) {
  if (!node) return;
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}
console.log("pre-order 순회 출력 예시: [4,2,1,3,6,5,7]");
preOrder(bst.root);

function inOrder(node) {
  if (!node) return;
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}
console.log("in-order 순회 출력 예시: [1,2,3,4,5,6,7]");
inOrder(bst.root);

function postOrder(node) {
  if (!node) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}
console.log("post-order 순회 출력 예시: [1,3,2,5,7,6,4]");
postOrder(bst.root);

console.log("end");
