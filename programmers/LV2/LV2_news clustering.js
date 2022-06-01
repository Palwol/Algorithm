//뉴스 클러스터링
function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let intersection = 0;

  //문자열 검사 함수
  function checkStr(arr) {
    let checkStr = /^[a-zA-Z]+$/;
    let i = 0;
    while (i < arr.length) {
      if (!checkStr.test(arr[i])) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
  }

  for (let i = 0; i < str1.length - 1; i++) {
    arr1.push(str1[i] + str1[i + 1]);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    arr2.push(str2[i] + str2[i + 1]);
  }
  checkStr(arr1);
  checkStr(arr2);
  if (arr1.length === 0 && arr2.length === 0) {
    return 65536;
  } else if (arr1.length === 0 || arr2.length === 0) {
    return 0;
  } else {
    for (let el of arr1) {
      let idx = arr2.findIndex((a) => a === el);
      if (idx === -1) {
        continue;
      } else {
        arr2.splice(idx, 1);
        intersection++;
      }
    }
  }
  return parseInt((intersection / (arr1.length + arr2.length)) * 65536);
}
console.log(solution("handshake", "shake hands"));
