// 广度优先遍历

var averageOfLevels = function (root) {
  if (!root) return [];
  const queue = [root];
  const answer = [];

  while (queue.length) {
    const length = queue.length;
    let sum = 0;
    let count = 0;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      sum += node.val;
      count++;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    if (count) {
      answer.push(sum / count);
    }
  }
  return answer;
};
