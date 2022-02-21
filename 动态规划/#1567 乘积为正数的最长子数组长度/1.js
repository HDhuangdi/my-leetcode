// dp table法

var getMaxLen = function (nums) {
  let maxNegLen = [];
  let maxPosLen = [];

  if (nums[0] < 0) {
    maxNegLen = [1];
    maxPosLen = [0];
  } else if (nums[0] > 0) {
    maxNegLen = [0];
    maxPosLen = [1];
  } else {
    maxNegLen = [0];
    maxPosLen = [0];
  }
  let dp = [maxPosLen[0]];

  for (let i = 1; i < nums.length; i++) {
    /**
          每次都需要保存一个最长负数长度和最长正数长度
          当前项如果是负数的话，最长长度为: dp[i] = max(dp[i - 1], maxNegLen[i - 1] + 1)
          当前项如果是正数的话，最长长度为: dp[i] = max(dp[i - 1], maxPosLen[i - 1] + 1)
       */
    /**
         maxNegLen逻辑
         当前项如果是负数的话，maxNegLen[i] = maxPosLen[i - 1] + 1
         当前项如果是正数的话，maxNegLen[i] = maxNegLen[i - 1] + 1
         maxPosLen逻辑
         当前项如果是负数的话，maxPosLen[i] = maxNegLen[i - 1] + 1
         当前项如果是正数的话，maxPosLen[i] = maxPosLen[i - 1] + 1
       */
    if (nums[i] < 0) {
      maxNegLen[i] = maxPosLen[i - 1] ? maxPosLen[i - 1] + 1 : 1;
      maxPosLen[i] = maxNegLen[i - 1] ? maxNegLen[i - 1] + 1 : 0;
      dp[i] = Math.max(dp[i - 1], maxNegLen[i - 1] + 1);
    } else if (nums[i] > 0) {
      maxNegLen[i] = maxNegLen[i - 1] ? maxNegLen[i - 1] + 1 : 0;
      maxPosLen[i] = maxPosLen[i - 1] ? maxPosLen[i - 1] + 1 : 1;
      dp[i] = Math.max(dp[i - 1], maxPosLen[i - 1] + 1);
    } else {
      // === 0
      maxNegLen[i] = 0;
      maxPosLen[i] = 0;
      dp[i] = dp[i - 1];
    }
  }

  return dp[dp.length - 1];
};
