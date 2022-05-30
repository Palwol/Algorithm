//숫자 문자열과 영단어
function solution(s) {
    let answer = s;
    const numObj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };
    for (const english of Object.keys(numObj)) {
        let regex = new RegExp(english,"g");
        answer = answer.replace(regex, numObj[english]);
    }
    return parseInt(answer);
}
console.log(solution("one4seveneight"));