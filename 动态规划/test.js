var canJump = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false;
    }
    max = Math.max(max, nums[i]);
  }
  return true;
};

canJump([2, 3, 1, 1, 4]);
