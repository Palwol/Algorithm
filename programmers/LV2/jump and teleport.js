//점프와 순간이동
function solution(n) {
  let answer = 0;
  while (n > 1) {
    if (n % 2) {
      n = n - 1;
      answer++;
    } else {
      n = n / 2;
    }
  }
  return answer + 1;
}
