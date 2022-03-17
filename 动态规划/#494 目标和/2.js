// 一维dp
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const value = (sum + target) / 2;
  if (value % 1 || value < 0) return 0;
  const dp = new Array(value + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= nums.length; i++) {
    const num = nums[i - 1];
    for (let j = value; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }
  return dp[value];
};
