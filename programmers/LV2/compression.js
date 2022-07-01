function solution(msg) {
  const dict = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let i = 0;
  const answer = [];

  while (i < msg.length) {
    let m = msg[i];
    let index = dict.findIndex((el) => el === m);
    while (index >= 0) {
      if (i + 1 >= msg.length) {
        answer.push(index);
        i++;
        break;
      }
      m += msg[i + 1];
      const nextIndex = dict.findIndex((el) => el === m);
      if (nextIndex < 0) {
        answer.push(index);
        dict.push(m);
      }
      index = nextIndex;
      i++;
    }
  }
  return answer;
}
