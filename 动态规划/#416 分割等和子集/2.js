// 滚动数组
var canPartition = function (nums) {
  // 实质上是01背包问题
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const value = sum / 2;
  if (value % 1) return false;
  const dp = new Array(value + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = value; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  return dp[dp.length - 1] === value;
};
