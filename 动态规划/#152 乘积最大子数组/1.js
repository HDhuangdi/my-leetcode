// dp table法

var maxProduct = function (nums) {
  let dp = [nums[0]];
  let min = [nums[0]];
  let max = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let minProduct = min[i - 1] * nums[i];
    let maxProduct = max[i - 1] * nums[i];
    min[i] = Math.min(minProduct, maxProduct, nums[i]);
    max[i] = Math.max(minProduct, maxProduct, nums[i]);
    dp[i] = Math.max(max[i], dp[i - 1]);
  }

  return dp[dp.length - 1];
};
