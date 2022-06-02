//게임 맵 최단거리
function solution(maps) {
  const queue = [[0, 0, 1]]; //좌표와 현재까지 거리
  const move = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const isBoundary = (i, row, col) => {
    if (i === 0 && row === maps.length - 1) return false;
    if (i === 1 && row === 0) return false;
    if (i === 2 && col === maps[0].length - 1) return false;
    if (i === 3 && col === 0) return false;
    return true;
  };

  while (queue.length) {
    const node = queue.shift();
    const [row, col, distance] = node;
    for (let i = 0; i < 4; i++) {
      if (row === maps.length - 1 && col === maps[0].length - 1) {
        return distance;
      }
      if (!isBoundary(i, row, col)) continue;
      if (!maps[row + move[i][0]][col + move[i][1]]) continue;
      queue.push([row + move[i][0], col + move[i][1], distance + 1]);
      maps[row + move[i][0]][col + move[i][1]] = 0;
    }
  }
  return -1;
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
