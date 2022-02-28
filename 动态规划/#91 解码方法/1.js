var numDecodings = function (s) {
  let dp = new Array(s.length).fill(0);
  dp[0] = s[0] * 1 !== 0 ? 1 : 0;

  for (let i = 1; i < s.length; i++) {
    const cur = s[i];
    const prev = s[i - 1];
    const curAndPrev = s[i - 1] + s[i];
    // 单个字符
    if (cur !== "0") {
      dp[i] = dp[i - 1];
    }
    // 双字符
    if (prev !== "0" && curAndPrev * 1 <= 26) {
      dp[i] += i === 1 ? 1 : dp[i - 2];
    }
  }
  return dp[dp.length - 1];
};
