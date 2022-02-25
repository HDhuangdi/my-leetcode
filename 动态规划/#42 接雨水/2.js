// 单调栈
/**
 * 核心思想:
 * 想要接雨水,当前状态的左边必定是一个一直向下的形式;
 * 在遍历的过程中如果发现有向上的情况,就开始计算雨水
 */

var trap = function (height) {
  const len = height.length;
  const stack = [];
  let ans = 0;

  for (let i = 0; i < len; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) break;
      const left = stack[stack.length - 1];
      const width = i - left - 1;
      const height2 = Math.min(height[left], height[i]) - height[top];
      ans += width * height2;
    }
    stack.push(i);
  }
  return ans;
};
