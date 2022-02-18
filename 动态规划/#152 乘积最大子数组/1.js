// dp table法

var maxProduct = function (nums) {
  let dp = [nums[0]];
  let min = [nums[0]];
  let max = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    min[i] = Math.min(min[i - 1] * nums[i], max[i - 1] * nums[i], nums[i]);
    max[i] = Math.max(min[i - 1] * nums[i], max[i - 1] * nums[i], nums[i]);
    dp[i] = Math.max(max[i], dp[i - 1]);
  }

  return dp[dp.length - 1];
};
