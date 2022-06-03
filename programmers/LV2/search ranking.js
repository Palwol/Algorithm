//순위 검색
function solution(info, query) {
  const answer = [];
  const map = {};

  //"-" 넣는 조합 함수
  function combination(infos, score, start) {
    const key = infos.join("");
    if (map[key]) {
      map[key].push(score);
    } else {
      map[key] = [score];
    }
    for (let i = start; i < 4; i++) {
      const combArr = [...infos]; //infos 깊은 복사
      combArr[i] = "-";
      combination(combArr, score, i + 1);
    }
  }

  //score 이분탐색 함수
  function binarySearch(querys, score) {
    const findArr = map[querys.join("")];
    if (findArr) {
      let left = 0;
      let right = findArr.length;
      while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (score > findArr[mid]) {
          left = mid + 1;
        } else if (score <= findArr[mid]) {
          right = mid;
        }
      }
      return findArr.length - left;
    } else return 0;
  }

  //1. info 모든 "-" 조합 map에 넣기
  info.forEach((el) => {
    const infos = el.split(" ");
    const score = parseInt(infos.pop());
    combination(infos, score, 0);
  });

  //2. 각 조합들의 score값 정렬
  for (const key in map) {
    map[key].sort((a, b) => a - b);
  }

  //3. map에서 query에 해당하는 key 찾아서 score값 이분탐색
  query.forEach((el) => {
    const querys = el.replace(/ and /g, "").split(" ");
    const score = parseInt(querys.pop());
    answer.push(binarySearch(querys, score));
  });
  return answer;
}
solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);
