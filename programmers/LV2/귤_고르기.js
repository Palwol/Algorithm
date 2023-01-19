function solution(k, tangerine) {
  let i = 0;
  let count = 0;
  const box = {};
  tangerine.forEach((el) => {
    if (!box[el]) box[el] = 1;
    else box[el] += 1;
  });
  const boxArray = Object.values(box).sort((a, b) => b - a);
  while (count < k) {
    count += boxArray[i];
    i++;
  }
  return i;
}
