function solution(data, col, row_begin, row_end) {
  const colIndex = col - 1;
  data.sort((a, b) => {
    if (a[colIndex] === b[colIndex]) return b[0] - a[0];
    return a[colIndex] - b[colIndex];
  });
  return data
    .slice(row_begin - 1, row_end)
    .map((row, i) => row.reduce((sum, el) => sum + (el % (i + row_begin)), 0))
    .reduce((acc, curr) => acc ^ curr);
}
