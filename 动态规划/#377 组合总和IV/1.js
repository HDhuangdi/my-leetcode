var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1)
    .fill(0)
    .map(() => new Array(target + 1).fill(0));
  dp[0][0] = 1;
  let ans = 0;
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j <= target; j++) {
      for (let num of nums) {
        if (j >= num) dp[i][j] += dp[i - 1][j - num];
      }
    }
    ans += dp[i][target];
  }
  return ans;
};
