// 使用dp数组

var maxSubArray = function (nums) {
  let dp = [nums[0]];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (sum + nums[i] < nums[i]) {
      sum = nums[i];
    } else {
      sum = sum + nums[i];
    }
    dp[i] = Math.max(dp[i - 1], sum);
  }
  return dp[dp.length - 1];
};
