//피로도

function solution(k, dungeons) {
  //모든 던전 탐험 루트 구하는 함수
  function permutation(arr, r) {
    const result = [];
    if (r === 1) {
      return arr.map((el) => [el]);
    }
    arr.forEach((fixed, index, origin) => {
      const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
      const p = permutation(rest, r - 1);
      const attached = p.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  }

  //탐험 가능한 최대 던전 수 구하기
  let maxCount = 0;
  permutation(dungeons, dungeons.length).forEach((root) => {
    let count = 0;
    let energy = k;
    for (const dungeon of root) {
      if (dungeon[0] > energy) {
        continue;
      } else {
        energy -= dungeon[1];
        if (energy < 0) {
          break;
        } else {
          count++;
        }
      }
    }
    maxCount = count > maxCount ? count : maxCount;
  });
  return maxCount;
}
