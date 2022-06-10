//2 x n 타일링
function solution(n) {
  var dp = Array.from(Array(n));
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }
  return dp[n - 1];
}
