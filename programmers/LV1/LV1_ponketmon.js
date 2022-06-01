//폰켓몬
function solution(nums) {
  const hash = {};
  for (const a of nums) {
    if (!hash[a]) {
      hash[a] = 1;
    } else {
      hash[a]++;
    }
  }
  return Math.min(nums.length / 2, Object.keys(hash).length);
}
console.log(solution([3, 3, 3, 2, 2, 4]));
