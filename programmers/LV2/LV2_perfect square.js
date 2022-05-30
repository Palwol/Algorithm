//멀쩡한 사각형
function solution(w, h) {
    let cut = 0;
    for (let i = 1; i <= w; i ++) {
        cut += Math.ceil(h * i / w) - Math.floor(h * (i - 1) / w);
    }
    return (h * w) - cut;
}
console.log(solution(8,12));