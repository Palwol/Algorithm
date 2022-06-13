//큰수 만들기
function solution(number, k) {
  const stack = [];
  let count = 0;
  let index = 0;
  while (count < k) {
    if (index >= number.length) {
      stack.pop();
      number = number.slice(0, number.length - 1);
      index -= 1;
      count++;
      continue;
    }
    if (!stack.length) {
      stack.push(number[index]);
      index++;
    }
    if (stack[stack.length - 1] < number[index]) {
      stack.pop();
      count++;
    } else {
      stack.push(number[index]);
      index++;
      continue;
    }
  }
  return stack.join("") + number.slice(index);
}
console.log(solution("654321", 5));
