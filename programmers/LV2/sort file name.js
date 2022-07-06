//파일명 정렬
function solution(files) {
  const answer = [];
  let needSort = [];
  //head, number, tail로 분리
  const newFiles = files.map((file) => {
    const newFile = ["", "", ""];
    let stack = [];
    const checkNum = /[0-9]/;
    for (let i = 0; i < file.length; i++) {
      if (!stack.length) {
        stack.push(file[i]);
        continue;
      }
      if (checkNum.test(stack[stack.length - 1])) {
        if (checkNum.test(file[i])) {
          stack.push(file[i]);
        } else {
          newFile[1] = stack.join("");
          newFile[2] = file.slice(i);
          break;
        }
      } else {
        if (checkNum.test(file[i])) {
          newFile[0] = stack.join("");
          stack = [];
        }
        stack.push(file[i]);
      }
    }
    if (!newFile[1].length) {
      newFile[1] = stack.join("");
    }
    return newFile;
  });

  //head로 1차 sort
  newFiles.sort((a, b) =>
    a[0].toUpperCase() < b[0].toUpperCase()
      ? -1
      : a[0].toUpperCase() > b[0].toUpperCase()
      ? 1
      : 0
  );

  //number로 2차 sort
  for (let i = 0; i < newFiles.length; i++) {
    if (!needSort.length) {
      needSort.push(newFiles[i]);
      continue;
    }
    if (
      newFiles[i][0].toUpperCase() !==
      needSort[needSort.length - 1][0].toUpperCase()
    ) {
      needSort.sort((a, b) => a[1] - b[1]);
      needSort.forEach((el) => answer.push(el.join("")));
      needSort = [];
    }
    needSort.push(newFiles[i]);
  }
  needSort.sort((a, b) => a[1] - b[1]);
  needSort.forEach((el) => answer.push(el.join("")));
  return answer;
}
