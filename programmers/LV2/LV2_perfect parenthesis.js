//괄호 변환
function solution(p) {
    if (p === "") return "";
    let left = 0;
    let right = 0;
    let u = "";
    let v = "";
    let uCorrect = true;
    //u,v 분리
    for (let i = 0; i < p.length; i++) {
        p[i] === '(' ? left ++ : right ++;
        if (right > left) uCorrect = false;  //u의 올바른 문자열 여부 확인
        if (left === right) {
            u = p.slice(0,i+1);
            v = p.slice(i+1);
            break;
        }
    }
    //재귀
    const recur = solution(v);
    if (uCorrect === true) {
        return u + recur;
    } else {
        let uReverse = "";
        for (let i = 1; i < u.length - 1; i ++) {
            u[i] === "(" ? uReverse += ")" : uReverse += "(";
        }
        return "(" + recur + ")" + uReverse;
    }
}
console.log(solution("()))((()"));