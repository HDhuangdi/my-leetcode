// dp 数组法

var jump = function (nums) {
  if (nums.length === 1) return 0;
  let dp = [1];
  let max = [nums[0]];
  let boundarys = [nums[0]];
  for (let i = 1; i < nums.length - 1; i++) {
    // 更新最远距离
    max[i] = max[i - 1] < nums[i] + i ? nums[i] + i : max[i - 1];
    // 更新边界
    if (i >= boundarys[i - 1]) {
      dp[i] = dp[i - 1] + 1;
      boundarys[i] = max[i];
    } else {
      dp[i] = dp[i - 1];
      boundarys[i] = boundarys[i - 1];
    }
  }
  return dp[dp.length - 1];
};
