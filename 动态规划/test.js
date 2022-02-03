var minCostClimbingStairs = function (cost) {
  // let a = 0
  //  for (let i = 2; i <= cost.length; i++) {
  //     a = Math.min(a + cost[i - 2], a + cost[i - 1])
  // }
  let l = 0;
  let r = 0;
  let tmp;
  for (let i = 2; i <= cost.length; i++) {
    tmp = r;
    r = Math.min(l + cost[i - 2], r + cost[i - 1]);
    l = tmp;
  }
  return r;
};

minCostClimbingStairs([10, 15, 20]);
