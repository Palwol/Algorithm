//약수의 개수와 덧셈
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    answer = i % Math.sqrt(i) === 0 ? answer - i : answer + i;
  }
  return answer;
}
