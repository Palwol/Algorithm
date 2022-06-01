//조이스틱
function solution(name) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const moveList = [name.length - 1];
  let count = 0;
  name.split("").forEach((str) => {
    count += Math.min(
      alphabet.indexOf(str),
      alphabet.length - alphabet.indexOf(str)
    );
  });
  let i = 0;
  while (i < name.length) {
    let endA = i + 1;
    while (endA < name.length && name[endA] === "A") {
      endA++;
    }
    moveList.push(i * 2 + (name.length - endA));
    moveList.push(i + (name.length - endA) * 2);
    i = endA;
  }
  return count + Math.min(...moveList);
}
console.log(solution("JAN"));
