// 使用dp table

var canJump = function (nums) {
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    if (dp[i - 1] < i) return false;
    dp[i] = Math.max(dp[i - 1] || 0, nums[i] + i);
  }
  return true;
};
