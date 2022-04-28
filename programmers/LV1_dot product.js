//내적
function solution(a, b) {
    return a.reduce((acc,curr,i) => acc+ (curr*b[i]),0);
}