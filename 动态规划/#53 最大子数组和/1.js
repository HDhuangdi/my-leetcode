var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let sum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] < nums[i]) {
      sum = nums[i];
    } else {
      sum = sum + nums[i];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};
