// 动态规划法

var trap = function (height) {
  /**
      求出每个位置左边最高高度，和每个位置的右边最高高度，取二者最小值，此值减去当前值，就为当前可接雨水
   */
  const len = height.length;
  const leftArr = new Array(len).fill(0);
  const rightArr = new Array(len).fill(0);
  const dp = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    leftArr[i] = Math.max(height[i], leftArr[i - 1] || 0);
  }
  for (let i = len - 1; i >= 0; i--) {
    rightArr[i] = Math.max(height[i], rightArr[i + 1] || 0);
  }

  for (let i = 1; i < len; i++) {
    const val = Math.min(leftArr[i], rightArr[i]);
    dp[i] = dp[i - 1] + Math.max(val - height[i], 0);
  }
  return dp[len - 1];
};
