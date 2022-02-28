var numberOfArithmeticSlices = function (nums) {
  let dp = new Array(nums.length).fill(0);
  let t = 0;
  let d = nums[1] - nums[0];
  for (let i = 2; i < nums.length; i++) {
    let prev = nums[i - 1];
    let cur = nums[i];
    if (cur - prev === d) {
      t++;
      dp[i] = dp[i - 1] + t;
    } else {
      t = 0;
      d = cur - prev;
      dp[i] = dp[i - 1];
    }
  }
  return dp[dp.length - 1];
};
