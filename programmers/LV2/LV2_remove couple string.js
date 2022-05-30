//짝지어 제거하기
function solution(s) {
    stack = [];
    for (const str of s) {
        if (stack.length > 0 && str === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(str);
        }
    }
    return stack.length ? 0 : 1;
}
console.log(solution("aaaaaa"));