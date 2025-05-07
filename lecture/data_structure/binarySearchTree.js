class BinarySearchTree {
  root = null;

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
    // TODO (숙제) 이미 넣은 값을 넣은 경우 에러 처리
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.#insert(this.root, value);
    }
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
  remove(value) {}
}

class Node {
  right = null;
  left = null;

  constructor(value) {
    this.value = value;
  }
}

const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(10);
bst.insert(3);
bst.insert(1);
bst.insert(14);
bst.insert(6);
bst.insert(7);
bst.insert(4);
bst.insert(13);
// bst.insert(13);

bst.search(5);
