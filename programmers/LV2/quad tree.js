//쿼드 압축 후 개수 세기
function solution(arr) {
  const answer = [0, 0];
  let n = Math.log2(arr.length);

  if (!n) {
    return arr[0][0] ? [0, 1] : [1, 0];
  }

  while (n > 0) {
    const block = Array.from(Array(2 ** (n - 1)), () =>
      new Array(2 ** (n - 1)).fill(-1)
    );
    for (let i = 0; i < arr.length / 2; i++) {
      for (let j = 0; j < arr.length / 2; j++) {
        let row = i * 2;
        let col = j * 2;
        const quad = [
          arr[row][col],
          arr[row + 1][col],
          arr[row][col + 1],
          arr[row + 1][col + 1],
        ];
        const fail = quad.filter((el) => el === -1).length;
        const zero = quad.filter((el) => el === 0).length;
        if (!zero && !fail) {
          block[i][j] = 1;
        } else if (zero === 4) {
          block[i][j] = 0;
        } else {
          answer[0] += zero;
          answer[1] += 4 - zero - fail;
        }
      }
    }
    arr = block;
    n--;
  }

  if (arr[0][0] === 0) answer[0]++;
  if (arr[0][0] === 1) answer[1]++;
  return answer;
}
