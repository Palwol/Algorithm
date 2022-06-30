//n^2 배열 자르기
function solution(n, left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    result.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return result;
}
