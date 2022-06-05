//괄호 회전하기
function solution(s) {
  let answer = 0;
  const bracket = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  //올바른 괄호 여부 확인 함수
  const isCorrect = (s) => {
    let stack = [];
    for (const el of s) {
      if (el === "(" || el === "{" || el === "[") {
        stack.push(el);
      } else {
        if (bracket[el] !== stack[stack.length - 1]) {
          return false;
        } else {
          stack = stack.slice(0, stack.length - 1);
        }
      }
    }
    return stack.length ? false : true;
  };
  //s 회전하며 확인
  for (let i = 0; i < s.length; i++) {
    if (isCorrect(s)) answer++;
    const tmp = s[0];
    s = s.slice(1) + tmp;
  }
  return answer;
}
solution("([{)}]");
