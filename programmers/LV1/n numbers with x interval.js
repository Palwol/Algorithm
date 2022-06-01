//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    if (i < 1) {
      answer.push(x);
    } else {
      answer.push(answer[i - 1] + x);
    }
  }
  return answer;
}

console.log(solution(2, 4));
