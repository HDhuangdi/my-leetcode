var wiggleMaxLength = function (nums) {
  let len = nums.length;
  let dp = new Array(len).fill(1);
  let up = new Array(len).fill(1);
  let down = new Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[i - 1] > 0) {
      // 下降序列+1
      dp[i] = down[i - 1] + 1;
      up[i] = dp[i];
      down[i] = down[i - 1];
    } else if (nums[i] - nums[i - 1] < 0) {
      // 上升序列+1
      dp[i] = up[i - 1] + 1;
      up[i] = up[i - 1];
      down[i] = dp[i];
    } else {
      // 无变化
      dp[i] = dp[i - 1];
      up[i] = up[i - 1];
      down[i] = down[i - 1];
    }
  }
  return dp[len - 1];
};
