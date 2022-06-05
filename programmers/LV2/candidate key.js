//후보키
function solution(relation) {
  //attribute 인덱스 배열 생성
  const attrIndex = [];
  for (let i = 0; i < relation[0].length; i++) {
    attrIndex[i] = i;
  }
  const answer = [];
  let combiArr = [];
  //attribute 조합 함수
  function combination(arr, pick) {
    const result = [];
    if (pick === 1) {
      return arr.map((el) => [el]);
    }
    arr.forEach((curr, index, origin) => {
      const rest = origin.slice(index + 1);
      const combArr = combination(rest, pick - 1);
      const attached = combArr.map((el) => [curr, ...el]);
      result.push(...attached);
    });
    return result;
  }
  //후보키 중복 조합(최소성 만족 여부) 확인 함수
  const isMinimal = (attrs) => {
    for (const el of answer) {
      if (el.every((attr) => attrs.includes(attr))) {
        return false;
      }
    }
    return true;
  };
  //attribute 조합 생성
  for (let i = 1; i <= attrIndex.length; i++) {
    combiArr.push(...combination(attrIndex, i));
  }
  //후보키 가능 조합(유일성 만족) 카운트
  combiArr.forEach((attrs) => {
    const set = new Set();
    relation.forEach((tuple) => {
      let result = "";
      attrs.forEach((el) => (result = result + tuple[el] + " "));
      set.add(result);
    });
    if (set.size === relation.length) {
      if (isMinimal(attrs)) {
        answer.push(attrs);
      }
    }
  });
  return answer.length;
}
solution([
  ["a", "1", "aaa", "c", "ng"],
  ["a", "1", "bbb", "e", "g"],
  ["c", "1", "aaa", "d", "ng"],
  ["d", "2", "bbb", "d", "ng"],
]);
