## 二叉树 BinaryTree 的遍历方法

### 递归法(深度优先)

#### 前序(DLR)

```js
const DLR = (root) => {
  if (!root) return [];
  let result = [root.val];
  result = result.concat(traverse(root.left), traverse(root.right));

  return result;
};
```

#### 中序(LDR)

```js
const LDR = (root) => {
  if (!root) return [];
  let result = [];
  result = result.concat(traverse(root.left));
  result.push(root.val);
  result = result.concat(traverse(root.right));

  return result;
};
```

#### 后序(LRD)

```js
const LRD = (root) => {
  if (!root) return [];
  let result = [];
  result = result.concat(traverse(root.left), traverse(root.right));
  result.push(root.val);

  return result;
};
```

### 迭代法(深度优先)

深度优先的迭代法主要使用栈(stack)来实现

#### 前序(DLR)

```js
const DLR = (root) => {
  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
};
```

#### 中序(LDR)

每个节点都需要获取所有的左节点并推入栈

```js
const LDR = (root) => {
  const stack = [root];
  const result = [];
  let cur = root;

  while (stack.length) {
    while (cur.left) {
      stack.push(cur.left);
      cur = cur.left;
    }
    const node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
      cur = node.right;
    }
  }

  return result;
};
```

#### 后序(LRD)

```js
const LRD = (root) => {
  const stack = [root];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    result.unshift(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
};
```

### 迭代法(广度优先)

广度优先算法主要使用队列(queue)来实现

```js
const BFS = (root) => {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return result;
};
```

## 二叉搜索树 BinarySearchTree

二叉搜索树的题目基本使用中序遍历,转换为有序数组后来解决

## 堆 Heap

在最大堆中，父节点的值比每一个子节点的值都要大。在最小堆中，父节点的值比每一个子节点的值都要小。这就是所谓的“堆属性”，并且这个属性对堆中的每一个节点都成立。

### 堆的父子节点取值公式

```js
parent(i) = floor((i - 1)/2)
left(i)   = 2i + 1
right(i)  = 2i + 2
```

### 如何向堆中添加元素

1. 向堆尾部推入该值
2. 将当前元素和父级元素比较,若小于(小顶堆)/大于(大顶堆)父级元素时,交换父子,重复该步骤直到不满足条件为止

### 如何向堆中弹出第一个元素

1. 将堆尾部的值赋值给堆首部
2. 删除堆最后一个元素
3. 将首部元素和左右节点中较小(小顶堆)/较大(大顶堆)比较,若大于(小顶堆)/小于(大顶堆)该值,交换位置,重复该步骤直到不满足条件为止

### 实现了 add 和 pop 的堆

```js
class MinHeap {
  constructor(nums) {
    this.val = [];
    for (const item of nums) {
      this.add(item);
    }
  }

  add(val) {
    this.val.push(val);
    let childIndex = this.val.length - 1;
    while (childIndex > 0) {
      let parentIndex = this.getParent(childIndex);
      let child = this.val[childIndex];
      let parent = this.val[parentIndex];
      if (parent > child) {
        this.val[childIndex] = parent;
        this.val[parentIndex] = child;
        childIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  pop() {
    // 首尾交换
    this.val[0] = this.val[this.val.length - 1];
    this.val.pop();
    // 向下遍历
    let curIndex = 0;
    while (this.val[curIndex]) {
      let cur = this.val[curIndex];
      let leftChildIndex = this.getLeft(curIndex);
      let rightChildIndex = this.getRight(curIndex);
      let minIndex;
      if (
        this.val[leftChildIndex] === undefined &&
        this.val[rightChildIndex] !== undefined
      ) {
        minIndex = rightChildIndex;
      }
      if (
        this.val[rightChildIndex] === undefined &&
        this.val[leftChildIndex] !== undefined
      ) {
        minIndex = leftChildIndex;
      }
      if (
        this.val[rightChildIndex] !== undefined &&
        this.val[leftChildIndex] !== undefined
      ) {
        minIndex =
          this.val[leftChildIndex] > this.val[rightChildIndex]
            ? rightChildIndex
            : leftChildIndex;
      }
      if (
        this.val[rightChildIndex] === undefined &&
        this.val[leftChildIndex] === undefined
      ) {
        break;
      }

      if (this.val[minIndex] < cur) {
        this.val[curIndex] = this.val[minIndex];
        this.val[minIndex] = cur;
        curIndex = minIndex;
      } else {
        break;
      }
    }
  }

  getParent(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeft(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRight(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getSize() {
    return this.val.length;
  }
  peek(index) {
    return this.val[index];
  }
}
```
