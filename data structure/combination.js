//조합 알고리즘
function combination(arr, pickNum) {
  const result = [];
  if (pickNum === 1) {
    return arr.map((el) => [el]);
  }
  arr.forEach((curr, index, origin) => {
    const rest = origin.slice(index + 1);
    const comb = combination(rest, pickNum - 1);
    const attached = comb.map((el) => [curr, ...el]);
    result.push(...attached);
  });
  return result;
}
console.log(combination([1, 2, 3, 4], 2));
