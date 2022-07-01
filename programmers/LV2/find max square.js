//가장 큰 정사각형 찾기
function solution(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] > 0 && row > 0 && col > 0) {
        board[row][col] =
          Math.min(
            board[row - 1][col],
            board[row][col - 1],
            board[row - 1][col - 1]
          ) + 1;
      }
    }
  }
  return Math.max(...board.map((row) => Math.max(...row))) ** 2;
}
