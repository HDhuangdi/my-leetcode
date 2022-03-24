// 一维dp

var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  // 当s的长度为0时，怎么样都可以拼成
  for (let i = 0; i <= wordDict.length; i++) {
    dp[0] = true;
  }
  for (let i = 1; i <= wordDict.length; i++) {
    for (let j = 0; j <= s.length; j++) {
      for (let word of wordDict.slice(0, i)) {
        if (dp[j]) break;
        if (word.length > j) continue;
        const _s = s.slice(j - word.length, j);
        if (_s === word) {
          dp[j] = dp[j] || dp[j - word.length];
        }
      }
    }
  }
  return dp[s.length];
};
