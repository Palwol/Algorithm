function solution(m, n, board) {
  board = board.map((el) => el.split(""));
  let answer = 0;
  let count = 0;

  //4개 지우는 함수
  const remove = (board) => {
    const index = [];
    for (let row = 0; row < m - 1; row++) {
      for (let col = 0; col < n - 1; col++) {
        if (board[row][col] === " ") continue;
        if (
          board[row][col] === board[row][col + 1] &&
          board[row][col] === board[row + 1][col] &&
          board[row][col] === board[row + 1][col + 1]
        ) {
          index.push([row, col]);
          count++;
        }
      }
    }
    index.forEach((el) => {
      if (board[el[0]][el[1]] !== " ") {
        answer++;
        board[el[0]][el[1]] = " ";
      }
      if (board[el[0] + 1][el[1]] !== " ") {
        answer++;
        board[el[0] + 1][el[1]] = " ";
      }
      if (board[el[0]][el[1] + 1] !== " ") {
        answer++;
        board[el[0]][el[1] + 1] = " ";
      }
      if (board[el[0] + 1][el[1] + 1] !== " ") {
        answer++;
        board[el[0] + 1][el[1] + 1] = " ";
      }
    });
  };

  //블록 내리는 함수
  const drop = (board) => {
    for (let col = 0; col < n; col++) {
      let row = 0;
      while (row < m - 1) {
        if (board[row][col] === " ") {
          row++;
          continue;
        }
        if (board[row + 1][col] === " ") {
          board[row + 1][col] = board[row][col];
          board[row][col] = " ";
          row = 0;
          continue;
        }
        row++;
      }
    }
  };

  while (true) {
    remove(board);
    if (!count) {
      break;
    } else {
      drop(board);
      count = 0;
    }
  }
  return answer;
}
solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]);
