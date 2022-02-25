// 双指针
/**
 *  本质上是优化了动态规划法的 Math.min(leftArr[i], rightArr[i]) 一步
 */

var trap = function (height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let leftMax = height[0];
  let rightMax = height[height.length - 1];
  let ans = 0;

  while (leftIndex < rightIndex) {
    leftMax = Math.max(height[leftIndex], leftMax);
    rightMax = Math.max(height[rightIndex], rightMax);
    if (height[leftIndex] < height[rightIndex]) {
      ans += leftMax - height[leftIndex];
      ++leftIndex;
    } else {
      ans += rightMax - height[rightIndex];
      --rightIndex;
    }
  }
  return ans;
};
