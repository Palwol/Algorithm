function solution(arr) {
  arr.sort((a, b) => b - a);
  const maxNum = arr[0];
  const nums = arr.slice(1);
  let i = 1;

  while (true) {
    const common = maxNum * i;
    if (nums.every((num) => common % num === 0)) return common;
    i++;
  }
}
