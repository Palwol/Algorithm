//H-Index
function solution(citations) {
  citations.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < citations.length; i++) {
    if (i + 1 <= citations[i]) answer++;
    else break;
  }
  return answer;
}
