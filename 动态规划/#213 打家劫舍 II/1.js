// 和#198不同的是首位相连,只需判断截去首尾的值的两个数组的#198算法最大值便可

var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let nums1 = nums.slice(1);
  let nums2 = nums.slice(0, -1);
  if (nums1.length === 1) {
    return Math.max(nums1[0], nums2[0]);
  }
  let lastPrev1 = nums1[0];
  let last1 = Math.max(nums1[0], nums1[1]);
  let lastPrev2 = nums2[0];
  let last2 = Math.max(nums2[0], nums2[1]);
  let tmp1, tmp2;
  for (let i = 2; i < nums1.length; i++) {
    tmp1 = last1;
    last1 = Math.max(last1, lastPrev1 + nums1[i]);
    lastPrev1 = tmp1;

    tmp2 = last2;
    last2 = Math.max(last2, lastPrev2 + nums2[i]);
    lastPrev2 = tmp2;
  }

  return Math.max(last1, last2);
};
