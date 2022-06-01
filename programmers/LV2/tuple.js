//튜플
function solution(s) {
  const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort(
    (a, b) => a.length - b.length
  );
  const set = new Set();
  arr.forEach((nums) => {
    nums.forEach((num) => set.add(num));
  });
  return [...set];
}
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");
