//124 나라의 숫자
function solution(n) {
    let answer = '';
    const num124 = ['4','1','2'];
    while (n > 0) {
        answer = num124[n % 3] + answer;
        n = n % 3 === 0 ? Math.floor(n / 3) - 1 : Math.floor(n / 3);
    }
    return answer;
}
console.log(solution(15));