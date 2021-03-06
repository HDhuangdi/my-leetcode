// 使用dp table

var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  let dp = [0, nums[0]];

  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[dp.length - 1];
};
