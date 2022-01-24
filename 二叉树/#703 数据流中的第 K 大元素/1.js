// 二叉搜索树法 (性能较差)

var KthLargest = function (k, nums) {
  this.k = k;
  this.TreeNode = function (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  };
  this.insert = (root, val) => {
    if (!root) return new this.TreeNode(val);
    if (root.val > val) {
      root.left = this.insert(root.left, val);
    }
    if (root.val <= val) {
      root.right = this.insert(root.right, val);
    }

    return root;
  };
  const sortedArrayToBST = (nums) => {
    for (const item of nums) {
      this.BST = this.insert(this.BST, item);
    }
  };
  sortedArrayToBST(nums);
};

KthLargest.prototype.add = function (val) {
  this.BST = this.insert(this.BST, val);
  const stack = [this.BST];
  let cur = this.BST;
  let count = 0;
  while (stack.length) {
    while (cur.right) {
      cur = cur.right;
      stack.push(cur);
    }
    const node = stack.pop();
    count++;
    if (count === this.k) {
      return node.val;
    }
    if (node.left) {
      stack.push(node.left);
      cur = node.left;
    }
  }
};
