//순열 알고리즘
function permutation(arr, r) {
  const result = [];
  if (r === 1) {
    return arr.map((el) => [el]);
  }
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const p = permutation(rest, r - 1);
    const attached = p.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
}
