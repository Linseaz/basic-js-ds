const { Node } = require('../extensions/list-tree.js');
class BinarySearchTree {
  rootNode = null;

  root() {
    return this.rootNode
  }

  add(data) {
    (!this.rootNode)
      ? this.rootNode = new Node(data)
      : this.addNode(data, this.rootNode);
  }

  has(data) {
    return this.check(data, this.rootNode);
  }

  find(data) {
    return this.findNode(data, this.rootNode);
  }

  min() {
    return this.findMin(this.rootNode);
  }

  max() {
    return this.findMax(this.rootNode);
  }

  addNode(data, current) {
    if (data > current.data) {
      (!current.right)
        ? current.right = new Node(data)
        : this.addNode(data, current.right)
    } else {
      (!current.left)
        ? current.left = new Node(data)
        : this.addNode(data, current.left)
    }
  }

  check(data, current) {
    if (!current) return false;
    if (data > current.data) {
      return this.check(data, current.right)
    }
    if (data < current.data) {
      return this.check(data, current.left)
    }
    return true
  }

  findNode(data, current) {
    if (!current) return null
    if (current.data === data) return current;
    if (data > current.data) {
      return this.findNode(data, current.right)
    }
    if (data < current.data) {
      return this.findNode(data, current.left)
    }
  }

  findMin(current) {
    if (!current.left) return current.data;
    return this.findMin(current.left)
  }

  findMax(current) {
    if (!current.right) return current.data;
    return this.findMax(current.right)
  }


  remove(data) {
    this.rootNode = this.removeNode(data, this.rootNode);
  }

  removeNode(data, current) {
    if (data < current.data) {
      current.left = this.removeNode(data, current.left);
      return current;
    }
    if (data > current.data) {
      current.right = this.removeNode(data, current.right);
      return current;
    }

    if (!current.right) {
      current = current.left;
      return current;
    }

    const nodeData = this.findMin(current.right);
    current.data = nodeData;
    current.right = this.removeNode(nodeData, current.right);
    return current;
  }
}
module.exports = {
  BinarySearchTree
};