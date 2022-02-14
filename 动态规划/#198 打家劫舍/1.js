var rob = function (nums) {
  let l1 = nums[0];
  if (nums.length === 1) {
    return l1;
  }
  let l2 = Math.max(nums[0], nums[1]);
  let tmp;
  for (let i = 2; i < nums.length; i++) {
    tmp = l2;
    l2 = Math.max(l2, l1 + nums[i]);
    l1 = tmp;
  }
  return l2;
};
