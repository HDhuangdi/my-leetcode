var deleteAndEarn = function (nums) {
  if (nums.length === 1) return nums[0];
  let max = Math.max(...nums);
  let all = new Array(max + 1);
  all.fill(0);
  for (let i = 0; i < nums.length; i++) {
    all[nums[i]] = ++all[nums[i]];
  }
  let lastPrev = all[0];
  let last = Math.max(all[0], all[1]);
  let tmp;
  for (let i = 2; i < all.length; i++) {
    tmp = last;
    last = Math.max(last, lastPrev + all[i] * i);
    lastPrev = tmp;
  }
  return last;
};
