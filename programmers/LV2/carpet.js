//카펫
function solution(brown, yellow) {
  const plus = parseInt(brown / 2) + 2;
  let row = Math.ceil(plus / 2);
  let col = plus - row;

  while (col - 2) {
    if ((row - 2) * (col - 2) === yellow) {
      return [row, col];
    }
    row++;
    col--;
  }
}
