// 二维dp
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const value = (sum + target) / 2;
  if (value % 1 || value < 0) return 0;
  const dp = new Array(nums.length + 1)
    .fill(0)
    .map(() => new Array(value + 1).fill(0));
  // 当数组长度为0且value为0时，有1种方法
  dp[0][0] = 1;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= value; j++) {
      const num = nums[i - 1];
      const no = dp[i - 1][j];
      if (j < num) {
        dp[i][j] = no;
        continue;
      }
      const yes = dp[i - 1][j - num];
      dp[i][j] = no + yes;
    }
  }
  return dp[nums.length][value];
};
