var jump = function (nums) {
  if (nums.length === 1) return 0;
  let step = 0;
  let max = 0; // 能跳到的最远下标
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);
    if (end === i) {
      end = max;
      step++;
    }
  }
  return step;
};
