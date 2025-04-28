class Tree {
  // 루트 노드
  constructor(value) {
    this.root = new Node(value);
  }
}

class Node {
  // 자식 노드 목록
  children = [];
  constructor(value) {
    this.value = value;
  }

  push(value) {
    this.children.push(new Node(value));
  }
}

const tree = new Tree(50);
tree.root.push(25);
tree.root.push(75);

tree.root.children[0].push(20);
tree.root.children[0].push(30);
tree.root.children[1].push(70);
tree.root.children[1].push(80);

console.log("tree");
