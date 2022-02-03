var tribonacci = function (n) {
  if (n < 2) return n;
  if (n === 2) return 1;
  let l = 0;
  let m = 1;
  let r = 1;
  let a = 2;
  for (let i = 3; i < n; i++) {
    l = m;
    m = r;
    r = a;
    a = l + m + r;
  }
  return a;
};
