//없는 숫자 더하기
function solution(numbers) {
    const target = 9*10/2;
    const sum = numbers.reduce((a,curr) => a+curr,0);
    return target - sum;
}
