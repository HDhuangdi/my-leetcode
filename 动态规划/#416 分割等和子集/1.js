// 二维数组

var canPartition = function (nums) {
  // 实质上是01背包问题
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const value = sum / 2;
  if (value % 1) return false;
  const dp = new Array(nums.length)
    .fill(0)
    .map(() => new Array(value + 1).fill(0));
  // 当nums只取第一个元素的情况下， 背包所能装的最大价值为
  for (let i = 0; i <= value; i++) {
    if (nums[0] <= i) dp[0][i] = nums[0];
  }
  // 当value = 0 的情况下，背包所能装的最大价值为0
  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = 0;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= value; j++) {
      // 当背包容量为j的情况下，如果当前元素的价值大于整个大于背包容量，只能选择不放该元素
      const no = dp[i - 1][j];
      if (nums[i] > j) {
        dp[i][j] = no;
        continue;
      }
      // 当背包容量为j的情况下，一定要放这个元素的最大价值 和 一定不放这个元素的最大价值 取最大便可
      // 放这个元素的最大价值 = 不放这个元素的(当前背包容量 - 这个元素的价值)背包容量 + 该元素价值
      const yes = dp[i - 1][j - nums[i]] + nums[i];
      dp[i][j] = Math.max(yes, no);
    }
  }
  return dp[nums.length - 1][value] === value;
};
