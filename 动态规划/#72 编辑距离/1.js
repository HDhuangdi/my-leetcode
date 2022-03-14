var minDistance = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  if (!len1) return len2;
  if (!len2) return len1;
  if (!len1 && !len2) return 0;
  // dp[i][j] 代表 word1长度为i，word2长度为j时需要几步
  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
  for (let i = 1; i <= len2; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 在A中插入一个字符
        const num1 = dp[i - 1][j] + 1;
        // 在B中插入一个字符
        const num2 = dp[i][j - 1] + 1;
        // 在A或B中替换一个字符
        const num3 = dp[i - 1][j - 1] + 1;
        dp[i][j] = Math.min(num1, num2, num3);
      }
    }
  }
  return dp[len1][len2];
};
