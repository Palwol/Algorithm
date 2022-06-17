//실패율
function solution(N, stages) {
  stages.sort((a, b) => b - a);
  const failRate = Array.from(Array(N), () => new Array(2).fill(0));
  let challenge = 0;
  let index = 0;
  for (let i = N; i > 0; i--) {
    failRate[i - 1][0] = i;
    let fail = 0;
    while (stages[index] >= i && index < stages.length) {
      challenge++;
      if (stages[index] === i) {
        fail++;
      }
      index++;
    }
    failRate[i - 1][1] = fail / challenge;
  }
  failRate.sort((a, b) => b[1] - a[1]);
  return failRate.map((el) => el[0]);
}
