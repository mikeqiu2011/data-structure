class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          // go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this;
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (true) {
      if (value == currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        // go left
        if (!currentNode.left) {
          return false;
        }
        currentNode = currentNode.left;
      } else {
        // go right
        if (!currentNode.right) {
          return false;
        }
        currentNode = currentNode.right;
      }
    }
  }
  // remove
}

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
console.log(tree.insert(9));
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
const result = JSON.stringify(traverse(tree.root));
console.log(result);

console.log(tree.lookup(10));
console.log(tree.lookup(20));
