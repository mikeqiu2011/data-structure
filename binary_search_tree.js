class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const targetNode = this.findNodeToInsert(value);
    if (value === targetNode.value) {
      return 'value already exists';
    } else if (value < targetNode.value) {
      targetNode.left = newNode;
    } else {
      targetNode.right = newNode;
    }
  }

  hasChild(node) {
    return node.left !== null || node.right !== null;
  }

  findNodeToInsert(value) {
    let targetNode = this.root;
    console.log(this.hasChild(targetNode));
    while (this.hasChild(targetNode)) {
      if (value < targetNode.value && targetNode.left !== null) {
        targetNode = targetNode.left;
      } else if (value > targetNode.value && targetNode.right !== null) {
        targetNode = targetNode.right;
      }
    }
    console.log(targetNode);
    return targetNode;
  }

  lookup(value) {
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
const result = JSON.stringify(traverse(tree.root));
console.log(result);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
