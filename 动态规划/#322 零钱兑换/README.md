## 思路

假设,硬币为`[3, 4, 5]`,总额为 20,相当于求:

1. 20 - 3 = 17 的最小硬币数 + 1

   - 17 - 3 = 14 的最小硬币数 + 1

     - 14 - 3 = 11 的最小硬币数 + 1

       ...

       再选择这三者中最小的值

   - 17 - 4 = 13 的最小硬币数 + 1

     ...

     再选择这三者中最小的值

   - 17 - 5 = 12 的最小硬币数 + 1

     ...

     再选择这三者中最小的值

   再选择这三者中最小的值

2. 20 - 4 = 16 的最小硬币数 + 1

   - 16 - 3 = 13 的最小硬币数 + 1

     ...

   - 16 - 4 = 12 的最小硬币数 + 1

     ...

   - 16 - 5 = 11 的最小硬币数 + 1

     ...

   再选择这三者中最小的值

3. 20 - 5 = 15 的最小硬币数 + 1

   - 15 - 3 = 12 的最小硬币数 + 1

     ...

   - 15 - 4 = 11 的最小硬币数 + 1

     ...

   - 15 - 5 = 10 的最小硬币数 + 1

     ...

   再选择这三者中最小的值

再选择这三者中最小的值

转移方程为`dp[i] = Math.min(dp[i], dp[i - coin] + 1)`,其中`i`为需要配成的金额,`coin`为面额
