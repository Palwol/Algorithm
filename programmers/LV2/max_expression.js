function solution(expression) {
  const calcArr = ["*", "+", "-"];
  const clacOrder = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [1, 2, 0],
    [2, 0, 1],
    [2, 1, 0],
  ];
  const originExpArr = [];
  const resultArr = [];
  let index = 0;
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "*" ||
      expression[i] === "+" ||
      expression[i] === "-"
    ) {
      originExpArr.push(parseInt(expression.slice(index, i)));
      originExpArr.push(expression[i]);
      index = i + 1;
    }
    if (i === expression.length - 1) {
      originExpArr.push(parseInt(expression.slice(index)));
    }
  }
  for (const order of clacOrder) {
    const expArr = [...originExpArr];
    for (const operater of order) {
      while (expArr.findIndex((el) => el === calcArr[operater]) !== -1) {
        const idx = expArr.findIndex((el) => el === calcArr[operater]);
        if (calcArr[operater] === "*") {
          expArr.splice(idx - 1, 3, expArr[idx - 1] * expArr[idx + 1]);
        } else if (calcArr[operater] === "+") {
          expArr.splice(idx - 1, 3, expArr[idx - 1] + expArr[idx + 1]);
        } else {
          expArr.splice(idx - 1, 3, expArr[idx - 1] - expArr[idx + 1]);
        }
      }
    }
    resultArr.push(Math.abs(expArr[0]));
  }
  return Math.max(...resultArr);
}
solution("100-200*300-500+20");
