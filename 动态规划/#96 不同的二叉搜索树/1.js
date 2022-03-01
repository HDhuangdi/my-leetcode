var numTrees = function (n) {
  /**
      设G(n)为由n个节点组成的BST的个数
      设F(i)为由i为根节点可以组成的BST的个数
      则：G(n) = F(1) + ... + F(n)
      且F(i) = 左子树的个数G(i - 1) * 右子树的个数G(n - i)
      得：G(n) = G(0) * G(n - 1) + ... + G(n - 1) * G(0)
   */
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[G.length - 1];
};
