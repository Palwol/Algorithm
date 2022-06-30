//이진 변환 반복하기
function solution(s) {
  let zero = 0;
  let count = 0;
  while (s !== "1") {
    const len = s.length;
    c = s.split("").filter((el) => el === "1").length;
    zero += len - c;
    s = c.toString(2);
    count++;
  }
  return [count, zero];
}
