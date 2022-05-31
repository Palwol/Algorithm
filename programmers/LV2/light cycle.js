function solution(grid) {
  const result = [];

  //arr의 각 원소의 인덱스 0,1,2,3번은 빛을 위,아래,왼쪽,오른쪽에서 받았는지 여부
  const arr = Array.from(Array(grid.length), () =>
    Array.from(Array(grid[0].length), () => new Array(4).fill(0))
  );
  //상,하,좌,우 방향
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  //arr에서 방문하지 않은 경로 확인해서 cycle 확인
  arr.forEach((row, i) => {
    row.forEach((col, j) => {
      col.forEach((item, k) => {
        if (!item) {
          result.push(cycle(i, j, k));
        }
      });
    });
  });

  //cycle 구하는 함수
  function cycle(i, j, k) {
    let count = 0;
    while (true) {
      if (arr[i][j][k]) {
        break;
      }
      arr[i][j][k] = 1;
      count++;

      i += direction[k][0];
      j += direction[k][1];

      if (i < 0) {
        i = arr.length - 1;
      }
      if (i >= arr.length) {
        i = 0;
      }
      if (j < 0) {
        j = arr[0].length - 1;
      }
      if (j >= arr[0].length) {
        j = 0;
      }

      if (grid[i][j] === "L") {
        k = [2, 3, 1, 0][k];
      }
      if (grid[i][j] === "R") {
        k = [3, 2, 0, 1][k];
      }
    }
    return count;
  }
  return result.sort((a, b) => a - b);
}
solution(["R", "R"]);
