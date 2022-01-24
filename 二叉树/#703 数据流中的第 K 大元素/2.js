// 使用堆 heap

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

var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap(nums);
};

KthLargest.prototype.add = function (val) {
  this.heap.add(val);

  while (this.heap.getSize() > this.k) {
    this.heap.pop();
  }
  return this.heap.peek(0);
};
